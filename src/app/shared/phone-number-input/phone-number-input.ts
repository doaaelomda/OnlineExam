import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

interface Country {
  code: string;
  dialCode: string;
  flagUrl: string;
}

@Component({
  selector: 'app-phone-number-input',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './phone-number-input.html',
  styleUrls: ['./phone-number-input.scss']
})
export class PhoneNumberInputComponent implements OnChanges {

  @Input() control!: AbstractControl | null;
  @Input() placeholder: string = '';
  @Input() defaultCountry: string = 'LK';
  currentControl!: FormControl;
  selectedCountry!: Country;
  showDropdown: boolean = false;

  @Input() preferredCountries: string[] = ['LK', 'IN', 'GB'];
countries: Country[] = [
  { code: 'LK', dialCode: '+94', flagUrl: 'https://flagcdn.com/w20/lk.png' },
  { code: 'IN', dialCode: '+91', flagUrl: 'https://flagcdn.com/w20/in.png' },
  { code: 'GB', dialCode: '+44', flagUrl: 'https://flagcdn.com/w20/gb.png' },
  { code: 'US', dialCode: '+1', flagUrl: 'https://flagcdn.com/w20/us.png' },
  { code: 'FR', dialCode: '+33', flagUrl: 'https://flagcdn.com/w20/fr.png' },
  { code: 'DE', dialCode: '+49', flagUrl: 'https://flagcdn.com/w20/de.png' },
  { code: 'CN', dialCode: '+86', flagUrl: 'https://flagcdn.com/w20/cn.png' },
  { code: 'JP', dialCode: '+81', flagUrl: 'https://flagcdn.com/w20/jp.png' },
];

ngOnChanges(changes: SimpleChanges): void {
  if (changes['control']?.currentValue) {
    this.currentControl = changes['control'].currentValue as FormControl;
  }
  const filteredCountries = this.preferredCountries.length
    ? this.countries.filter(c => this.preferredCountries.includes(c.code))
    : this.countries;

  this.selectedCountry = filteredCountries.find(c => c.code === this.defaultCountry) || filteredCountries[0];
}


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.showDropdown = false;
  }
}
