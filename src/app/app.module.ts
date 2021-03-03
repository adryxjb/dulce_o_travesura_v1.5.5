import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

//Importar componentes
import { AppComponent } from "./app.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { ApiComponent } from "./components/api/api.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { RecetasComponent } from "./components/recetas/recetas.component";
import { Catalogo } from "./components/catalogo/catalogo.component";
import { AddProducto } from "./components/addProducto/addproducto.component";
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { ConectionService } from "./services/conexion.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ContactoComponent,
    HomeComponent,
    ProductosComponent,
    RegistroComponent,
    ApiComponent,
    UsuariosComponent,
    RecetasComponent,
    Catalogo,
    AddProducto,
    AdministracionComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [appRoutingProviders, ConectionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
