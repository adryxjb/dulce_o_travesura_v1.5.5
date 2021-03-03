import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar Componentes
import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ApiComponent } from "./components/api/api.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { RecetasComponent } from "./components/recetas/recetas.component";
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

//Rutas
const appRoutes: Routes = [
  //Para rutas vacias
  { path: "", component: HomeComponent },
  //Cuando se introduce el nombre del componente en la ruta:
  { path: "productos", component: ProductosComponent },
  { path: "registro", component: RegistroComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "api", component: ApiComponent },
  { path: "usuarios/:id", component: UsuariosComponent },
  { path: "recetas", component: RecetasComponent },
  {
    path: "administracion",
    component: AdministracionComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  //Cuando se introduce una ruta que no existe:
  { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
