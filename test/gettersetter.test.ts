describe("Getter and Setter", () => {
  // --- CLASS CATEGORY ---
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  // --- CLASS USER (TUGAS MANDIRI) ---
  class User {
    _username: string = "Guest";
    _password: string = "";

    // Getter Username: Ambil dari brankas _username
    get username(): string {
      return this._username;
    }

    // Setter Username: Validasi tidak boleh kosong
    set username(value: string) {
      if (value !== "") {
        this._username = value;
      } else {
        console.log("Input ditolak: Username tidak boleh kosong!");
      }
    }

    // Getter Password: Selalu return sensor
    get password(): string {
      return "**********";
    }

    // Setter Password: Minimal 6 karakter
    set password(value: string) {
      if (value.length > 6) {
        this._password = value;
      } else {
        console.log("Password mu salah kocak! (Kurang dari 6 karakter)");
      }
    }
  }

  class Radio {
    _volume: number = 0; // Ini Brankasnya

    // 1. Lengkapi Getter (Ingat: ambil dari Brankas!)
    get volume(): string {
      return this._volume + "persen";
    }

    // 2. Lengkapi Setter (Ingat: simpan ke Brankas!)
    set volume(value: number) {
      // Cek: kalau value >= 0 DAN value <= 100
      if (value >= 0 && value <= 100) {
        this._volume = value;
      } else {
        console.log("Volume tidak valid!");
      }
    }
  }

  // --- TEST CASE ---
  it("should support Getter and Setter in Typescript OOP", () => {
    const category = new Category();
    category.name = "Electronic";
    category.name = ""; // Ditolak
    console.log("Category Name:", category.name);
  });

  it("Harusnya bisa memvalidasi data user", () => {
    const user = new User();
    const radio = new Radio();

    // Test Username
    user.username = "Indra";
    user.username = ""; // Ditolak
    console.log("Username Akhir:", user.username);

    // Test Password
    user.password = "123";
    user.password = "rahasia123";
    console.log("Password Sensor:", user.password);

    //test Radio
    radio.volume = 50;
    radio.volume = 150;

    console.log(radio.volume);
  });
});
