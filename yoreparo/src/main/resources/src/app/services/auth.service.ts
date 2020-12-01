import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url ='https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyDdZjL7NbwvqoPUdYf3I6cDzKuA0maVU94';

  userToken: string;

  //CREAR NUEVO USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  //LOGIN
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  logout(){
      localStorage.removeItem('token');
  }
  
  login(usuario: UsuarioModel){
    const authData ={
      email: usuario.correo,
      password:usuario.contrasena,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.apikey}`,
      authData 
    ).pipe(
      map(res=>{
        console.log('Entró en el mapa de rxjs');
        this.guardarToken(res['idToken']);
        return res;
      })
    );
  }
  
  nuevoUsuario(usuario : UsuarioModel){
    const authData ={
      email: usuario.correo,
      password:usuario.contrasena,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}:signUp?key=${this.apikey}`,
      authData 
    ).pipe(
      map(res=>{
        console.log('Entró en el mapa de rxjs');
        this.guardarToken(res['idToken']);
        return res;
      })
    );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = ''; 
    }
  }
}
