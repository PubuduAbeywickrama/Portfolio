import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardModule, ButtonModule,CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  projects = [
    {
      title: 'Project One',
      description: 'A web application built with Angular and TailwindCSS.',
      githubLink: 'https://github.com/your-profile/project-one',
      selectedImage: 'assets/projects/1.png', // Default main image
      images: [
        'assets/projects/1.png',
        'assets/projects/3.png',
        'assets/projects/4.png',
        'assets/projects/5.png',
        'assets/projects/6.png',
      ],
    },
    {
      title: 'Project Two',
      description: 'A mobile-friendly e-commerce platform using React.',
      githubLink: 'https://github.com/your-profile/project-two',
      selectedImage: 'assets/projects/1.png', // Default main image
      images: [
        'assets/projects/1.png',
        'assets/projects/3.png',
        'assets/projects/4.png',
        'assets/projects/5.png',
        'assets/projects/6.png',
      ],
    },
    {
      title: 'Project Three',
      description: 'A full-stack blog application using Node.js and MongoDB.',
      githubLink: 'https://github.com/your-profile/project-three',
      selectedImage: 'assets/projects/1.png', // Default main image
      images: [
        'assets/projects/1.png',
        'assets/projects/3.png',
        'assets/projects/4.png',
        'assets/projects/5.png',
        'assets/projects/6.png',
      ],
    },
    {
      title: 'Project Four',
      description: 'A portfolio site showcasing interactive UI components.',
      githubLink: 'https://github.com/your-profile/project-four',
      selectedImage: 'assets/projects/1.png', // Default main image
      images: [
        'assets/projects/1.png',
        'assets/projects/3.png',
        'assets/projects/4.png',
        'assets/projects/5.png',
        'assets/projects/6.png',
      ],
    },
  ];

  // Set main image when thumbnail is clicked
  setMainImage(project: any, image: string) {
    project.selectedImage = image;
  }
  experiences = [
    {
      step: 2,
      role: 'Software Engineer',
      company: 'XYZ Tech',
      period: 'Jun 2018 - Dec 2020',
      description: 'Focused on developing scalable back-end systems and creating RESTful APIs.',
    },
    {
      step: 1,
      role: 'Software Engineer - Intern',
      company: 'Pearson lanka',
      period: 'Apr 2023 - Apr 2024',
      description: 'Contributed to the development of the Pearson+ web and mobile applicationsGained hands-on experience in Android development,leveraging Java and KotlinWorked on React-based web applications',
    },
  ];
}
