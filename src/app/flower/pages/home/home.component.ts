import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  mostrarImagen: boolean = false;
  isModalOpen = false; // Controla la apertura del modal
  verCarta() {
    this.launchConfetti();
    this.abrirModal();
  }

  launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  abrirModal() {
    this.isModalOpen = true;
    const modal = document.getElementById('cartaModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  cerrarModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      const modal = document.getElementById('cartaModal');
      if (modal) {
        modal.classList.add('hidden');
        this.mostrarImagen = false;
      }
    }, 500); // Espera la duración de la animación antes de ocultar el modal
  }

  toggleVerMas() {
    this.mostrarImagen = !this.mostrarImagen;
  }


}
