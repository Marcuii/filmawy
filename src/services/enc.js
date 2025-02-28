import * as CryptoJS from 'crypto-js';

function storageEncryption() {
    /**
  * secret key should be stored in a safe place. This is only for a demo purpose.
  */
    let _key = "secret_key"

    function encrypt(txt) {
        return CryptoJS.AES.encrypt(txt, _key).toString();
    }

    function decrypt(txtToDecrypt) {
        return CryptoJS.AES.decrypt(txtToDecrypt, _key).toString(CryptoJS.enc.Utf8);
    }

    function manipulateLocalStorage() {
        Storage.prototype.setEncryptedItem = (key, value) => {
            localStorage.setItem(key, encrypt(value));
        };

        Storage.prototype.getDecryptedItem = (key) => {
            let data = localStorage.getItem(key) || "";
            return decrypt(data) || null;
        }
    }

    manipulateLocalStorage();
}
storageEncryption();

export default storageEncryption;