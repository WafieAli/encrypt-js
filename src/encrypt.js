import React from 'react';
import CryptoJS from 'crypto-js';

const Encrypt = () => {
  const data = 'Assalamualaikum, Dunia!';
  const salt = '1daec78593a643e6b53ce9803ded5916';

  // Encrypt function
function encryptData(data, key) {
    const encryptedData = CryptoJS.AES.encrypt(data, salt).toString();
    return encryptedData;
  }
  
  // Decrypt function
  function decryptData(encryptedData, key) {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
  
  const encryptedData = encryptData(data, salt);
  console.log('Encrypted Data:', encryptedData);
  
  const decryptedData = decryptData(encryptedData, salt);
  console.log('Decrypted Data:', decryptedData);

  return (
    <>
        <div>
            Encrypted: {encryptedData}
        </div>
        <div>
            Decrypted: {decryptedData}
        </div>
    </>
  );
};

export default Encrypt;
