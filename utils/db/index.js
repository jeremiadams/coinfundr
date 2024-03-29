import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';


if(!admin.apps.length){
  try{
    admin.initializeApp({
      // credential:admin.credential.cert(serviceAccount)
      credential:admin.credential.cert(serviceAccount)
    });
  } 
  catch(error) {
    console.log(error.stack)
  }
}

export default admin.firestore();


// {
//   "type": "service_account",
//   "project_id": "coinfundr-9ba80",
//   "private_key_id": "0db77c80a0c223658572b4701456b4493d916214",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbXdgnx+gWoLFZ\n+9HwGvv52/xkFVp8yJSGxBt0vL4Hyz0bQ8VbmNovCbRK4qjxQNFb2pOtXN5lIDD2\nD77XD4ZiUkweFK9unpL+OOPblsWSokre+mhFtw9TXeh0luGLwYNRHOeSu0moAIXi\n6+aNSB6v+lJMDf5E+EkrAWvOptIkvY8TDPGNw02ncWMgFVleGIsTUa6drjhrsH+F\nTH+Lo7UHYHrt889k1ZON/CasRLwIWxX2kpTKRoI72aij/MkIku7HaJv24M5fpNka\ny3ZcfjL6kXLk4xJ509u0qeanN7FF1CbnATDPuzl1Ab16t6Gs4Zt4EeMumZyM0UwN\n69TjQicvAgMBAAECggEAB+dGYNZYq5dWvkWYSzcMMgyAnSoVlXscochlvyf/dg+0\nLD1j05eFzdZtX1EtbUGyBL1XPX6Xv5wwxsD2oSO53ymMPrbS/8poSYS6WUglBSMQ\nB6IZs3uETOYzi4QbYCEiyCReHAbpUHcKWIijN0pVE/hPacKyeG61m3mciCwl94Fq\nwFm+XEdzJyMUs5mXh54ENZIc+4/5848IUV+gEXL4tF76n2KDLEsCEvB0CPMfyDJA\nT1TiQCLMSv05ly8jzbNImfJUoRzo0bY1CRQgaHqCv0YCuxT+md73xTw/NOVibDme\nzUyYY68htwtCFw+8cGlSnRtlpjlfip5Qm/j6CEb76QKBgQDT7YOQFO6h4XtxkiEv\nJbrqK844hirg08/ZdenHWJvr44KaN3ZgV6fTxuhX/zGM2s4F7Ujw1YrAmG76uw8c\n937LkT9hO8L45xfv6v68Zk230au2rOqhHRkSuEiyrlj3K5OoPCzWWYWSAeuEWTI3\n5VxUarOkdD9kew80xQkpShCxeQKBgQC7rSiFfzFzEjTfD2jPOPn7szVm1for2MPZ\ng/5I4DyQ5E9lsgNZNRG4AB3HbVDDfvG7W5pTd6Qphh7bfaZmjAkylwjyY0E2hbEp\nYrKyNfSlQaRS6/VLEWHNTw3Qr7wb+U5uCTXfgH9kPwNzbWA8F3nIbvPi11nkN4yT\n1tKEzPxb5wKBgEGSviB4uZWRJRbw9h+Wdw053KcUrHPAVhGdMGaj/iqwzJpXCuOo\ne59FbmK77WL92L1wvB74k+QfxkcCVhzKX4sxOAEn8p39MyTi+0rkBKwZzh3Jxxdu\n33ExYB0ZYSGpdBib9euk63VP7sWWq7kr2LOuCEOcTHkUspHLXZhO+HdRAoGAPQB9\nqVa8hgCm+tIRaTnF15BajUCD/niIwEzs/FcWmKn9PLrt57MePUacZ1Qa6lB61kFi\nGjtLOswDf6iJy888thrtp4uniMdP3HneR5rOGGELvoA/zNSri4ZkoS5d4GHaol2Q\nC0PDJJxuzLgCjcW7qfCWiWciKtH7eZpb9xqB9IUCgYBvor79A23Lkvc9wwMCKQQX\np4fiAqR7UtFvvo1K5yGtHHdJkuc6j0WQJIWVSQIEA1VKSiVIZEL8GlpQ66nbLNtw\ndIhw6kKp1yIGgnhsHUgK73O6FXN6oONAGyosOlHh5nvtFM+kEK0x7CL+iLMTkuDq\nb4chWZfA6NUi1WVdnEasLQ==\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-je4cr@coinfundr-9ba80.iam.gserviceaccount.com",
//   "client_id": "103673417956535367122",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-je4cr%40coinfundr-9ba80.iam.gserviceaccount.com"
// }






// Argument of type '{ type: string; project_id: string; private_key_id: string; private_key: string; client_email: string; client_id: string; auth_uri: string; token_uri: string; auth_provider_x509_cert_url: string; client_x509_cert_url: string; }' is not assignable to parameter of type 'string | ServiceAccount'.ts(2345)
