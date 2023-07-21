import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  branches: any[] = [];

  public branchesSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { 
    this.branches = [
      {
        id: 1,
        name: 'head office',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email: 'customercare@addosser.com',
        checked: true,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 2,
        name: 'head office',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 3,
        name: 'head office',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 4,
        name: 'head office',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 5,
        name: 'Alaba Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 6,
        name: 'Alaba Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 7,
        name: 'Alaba Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 8,
        name: 'Alaba Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 9,
        name: 'Ile-Epo Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 10,
        name: 'Ile-Epo Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 11,
        name: 'Ile-Epo Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 12,
        name: 'Ile-Epo Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 13,
        name: 'Mushin Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 14,
        name: 'Mushin Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 15,
        name: 'Mushin Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
      {
        id: 16,
        name: 'Mushin Branch',
        number: '+234-9087013749, +234-8140437926',
        address: '32 Lewis Street, Lagos Island, Lagos.',
        email:'customercare@addosser.com',
        checked: false,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6102709575794!2d3.4154019745870143!3d6.444060593547227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b41d952d08f%3A0x4491998ed3607327!2sAddosser%20Finance%20Ltd.!5e0!3m2!1sen!2sng!4v1688622385124!5m2!1sen!2sng',
      },
    ]
  }

  getBranches() {
    this.branchesSubject.next(this.branches);
  }
}
