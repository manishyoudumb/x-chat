import { useEffect, useState } from "react";
import ChatRoom from "../Components/ChatRoom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import dotenv from "dotenv";


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  });
} 

else {
  firebase.app();
}