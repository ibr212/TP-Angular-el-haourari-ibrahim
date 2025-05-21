// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  hidePassword = true;

  // Données mockées pour simulation
  private mockUsers = [
    { email: 'admin@ecommerce.com', password: '123456', name: 'Admin', role: 'admin' },
    { email: 'user@ecommerce.com', password: '123456', name: 'Utilisateur', role: 'user' },
    { email: 'client@test.com', password: 'password', name: 'Client Test', role: 'customer' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadUserFromStorage();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  loadUserFromStorage(): void {
    const savedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (savedUser) {
      // Utilisateur déjà connecté, rediriger
      this.router.navigate(['/boutique']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    // Simulation d'appel API avec délai
    setTimeout(() => {
      const user = this.authenticateUser(credentials);
      
      if (user) {
        this.handleSuccessfulLogin(user);
      } else {
        this.handleLoginError();
      }
    }, 1500); // Simulation de délai réseau
  }

  private authenticateUser(credentials: { email: string, password: string }) {
    return this.mockUsers.find(user => 
      user.email === credentials.email && user.password === credentials.password
    );
  }

  private handleSuccessfulLogin(user: any): void {
    const userData = {
      id: Math.floor(Math.random() * 1000),
      email: user.email,
      name: user.name,
      role: user.role,
      token: this.generateMockToken(),
      loginTime: new Date().toISOString()
    };

    // Sauvegarder selon l'option "Se souvenir de moi"
    if (this.loginForm.value.rememberMe) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(userData));
    }

    this.isSubmitting = false;
    
    // Afficher un message de succès
    this.showSuccessMessage(`Bienvenue ${user.name}!`);
    
    // Rediriger après un court délai
    setTimeout(() => {
      this.router.navigate(['/boutique']);
    }, 1000);
  }

  private handleLoginError(): void {
    this.isSubmitting = false;
    this.errorMessage = 'Email ou mot de passe incorrect.';
  }

  private generateMockToken(): string {
    return 'mock_token_' + Math.random().toString(36).substr(2, 9);
  }

  private showSuccessMessage(message: string): void {
    // Vous pouvez utiliser un service de notification ici
    alert(message);
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    
    if (!control || !control.errors || !control.touched) {
      return '';
    }

    if (controlName === 'email') {
      if (control.errors.required) {
        return 'L\'email est requis';
      }
      if (control.errors.email) {
        return 'Veuillez entrer une adresse email valide';
      }
    }

    if (controlName === 'password') {
      if (control.errors.required) {
        return 'Le mot de passe est requis';
      }
      if (control.errors.minlength) {
        return 'Le mot de passe doit contenir au moins 6 caractères';
      }
    }

    return '';
  }

  // Méthodes pour les boutons sociaux (simulation)
  loginWithGoogle(): void {
    this.simulateSocialLogin('Google');
  }

  loginWithFacebook(): void {
    this.simulateSocialLogin('Facebook');
  }

  private simulateSocialLogin(provider: string): void {
    this.isSubmitting = true;
    
    setTimeout(() => {
      const mockSocialUser = {
        id: Math.floor(Math.random() * 1000),
        email: `user@${provider.toLowerCase()}.com`,
        name: `Utilisateur ${provider}`,
        role: 'customer',
        token: this.generateMockToken(),
        loginTime: new Date().toISOString(),
        provider: provider
      };

      sessionStorage.setItem('currentUser', JSON.stringify(mockSocialUser));
      this.isSubmitting = false;
      this.showSuccessMessage(`Connexion réussie avec ${provider}!`);
      
      setTimeout(() => {
        this.router.navigate(['/boutique']);
      }, 1000);
    }, 1000);
  }

  // Méthode pour pré-remplir avec des comptes de test
  fillTestAccount(accountType: 'admin' | 'user' | 'customer'): void {
    const testAccounts = {
      admin: { email: 'admin@ecommerce.com', password: '123456' },
      user: { email: 'user@ecommerce.com', password: '123456' },
      customer: { email: 'client@test.com', password: 'password' }
    };

    const account = testAccounts[accountType];
    this.loginForm.patchValue({
      email: account.email,
      password: account.password
    });
  }
}