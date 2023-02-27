import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SendmailService } from '../services/send-mail.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  constructor(private sendMail: SendmailService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Contact | Sarah Goudelouf")
  }

  onSubmit() {
    let user = {
      message: "<p> Message venant de " + this.contactForm.value.name +
        "</p><br><p>Mail : " + this.contactForm.value.mail +
        "</p><br><p>Concerne : " + this.contactForm.value.message + 
        "</p>",
        subject : "Demande d'informations",
         to:"sgoudelouf@gmail.com"
    }
    this.sendMail.sendMail(user);
    this.contactForm.reset();
  }

}
