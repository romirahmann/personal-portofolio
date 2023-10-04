import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor() {}

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    const text = "Hi There... I'am"; // Ganti dengan teks yang ingin Anda ketikkan
    let index = 0;
    const typingText = document.getElementById("sayHi");

    function type() {
      if (index < text.length) {
        typingText!.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Sesuaikan kecepatan ketik di sini
      }
    }

    type();
  }
}
