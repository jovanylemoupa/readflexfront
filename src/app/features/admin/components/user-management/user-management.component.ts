import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user/user.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  newUser: User = { id:0, username: '', email: '', password: '', admin: false };
  showAddUserForm: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        this.filteredUsers = this.users; // Affiche tous les utilisateurs par défaut
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
      }
    );
  }

  filterUsers(filter: string): void {
    if (filter === 'all') {
      this.filteredUsers = this.users;
    } else if (filter === 'admin') {
      this.filteredUsers = this.users.filter(user => user.admin);
    } else if (filter === 'normal') {
      this.filteredUsers = this.users.filter(user => !user.admin);
    }
  }

  openAddUserModal(): void {
    /*
    this.newUser = { id: 0, username: '', email: '', password: '', admin: false };
    if(typeof document !== 'undefined'){

    const modalElement = document.getElementById('addUserModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Le modal avec l\'ID "addUserModal" n\'a pas été trouvé.');
    }
  } */
  }

  /*submitAddUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      (user) => {
        this.loadUsers(); // Recharge la liste après ajout

        if (typeof document !== 'undefined') {
        const modalElement = document.getElementById('addUserModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          } else {
            console.error('Aucune instance de modal trouvée.');
          }
        } else {
          console.error('Le modal avec l\'ID "addUserModal" n\'a pas été trouvé.');
        }
      }
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      }
    );
  }*/

 openAddUserForm(): void {
    this.showAddUserForm = true;
  }

  submitAddUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      (user) => {
        this.loadUsers(); // Recharge la liste après ajout
        this.newUser = { id: 0, username: '', email: '', password: '', admin: false }; // Réinitialiser le formulaire
        this.showAddUserForm = false;
        //this.hideAddUserForm = true;
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      }
    );
  }

  editUser(user: User): void {
    // Logique pour modifier un utilisateur
    console.log('Modifier utilisateur', user);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.loadUsers(); // Recharge la liste après la suppression
    }, error => {
      console.error('Erreur lors de la suppression de l’utilisateur:', error);
    });
  }

  changeStatus(user: User): void {
    this.userService.changeUserStatus(user.id).subscribe(() => {
      this.loadUsers(); // Recharge la liste après le changement de statut
    }, error => {
      console.error('Erreur lors du changement de statut de l’utilisateur:', error);
    });
  }

  viewUserDetails(user: User): void {
    console.log('Voir les détails de l’utilisateur', user);
    // Tu peux aussi ouvrir un modal ou rediriger vers une autre page ici
  }
}




