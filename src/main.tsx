import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { persistStore } from "redux-persist";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '@/config.ts';
import "./index.css";
import App from "./App.tsx";
import "./tailwind.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
);
