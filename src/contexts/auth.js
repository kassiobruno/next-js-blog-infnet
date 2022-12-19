import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if(storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

   //Função para logar usuário
   async function signIn(email, password) {
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value)=> {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot)=> {
        let data = {
          uid: uid,
          nome: snapshot.val().nome,
          email: value.user.email,
        };
        console.log(data);

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error)=> {
      alert("E-mail ou senha inválidos!", error);
      setLoadingAuth(false);
    })
  }

   //Cadastrar Usuário
   async function signUp(email, password, nome) {
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value)=> {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
        nome: nome,
      })
      .then(()=> {
        let data = {
          uid: uid,
          nome: nome,
          email: value.user.email,
          password: value.user.password,        
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error)=> {
      alert(error.code);
      setLoadingAuth(false);
    });
  }

  //Enviar email de recuperação de senha
  async function resetPassword(email) {
    setLoadingAuth(true);
    await firebase.auth().sendPasswordResetEmail(email)
    .then(function (user) {
        alert('Email de recuperação enviado com sucesso!')
        setLoadingAuth(false);            
    }).catch(function(e) {
        console.log(e)
        alert("E-mail não registrado no sistema!", e);
        setLoadingAuth(false);
    })        
}

async function storageUser(data) {
  await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  console.log(data);
}

//Fazer logout
async function signOut() {
  await firebase.auth().signOut();
  await AsyncStorage.clear()
  .then(()=> {
    setUser(null);
  })
}

return(
  <AuthContext.Provider value={{signed: !!user, user, loading, signUp, signIn, signOut, resetPassword, loadingAuth}}>
    {children}
  </AuthContext.Provider>
);
}

export default AuthProvider;
