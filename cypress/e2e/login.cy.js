/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email address is empty
 *   - should display alert when password is empty
 *   - should display alert when email address and password are wrong
 *   - should display homepage when email address and password are correct
 */
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  // Test pertama Aplikasi harus menampilkan halaman login dengan benar.
  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email Address"').should('be.visible');
    cy.get('input[placeholder="Password"').should('be.visible');
    cy.get('button')
      .contains(/^Masuk$/)
      .should('be.visible');
  });

  // Test Kedua Aplikasi harus menampilkan alert jika email address kosong.
  it('should display alert when email address is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) =>
      expect(str).to.equal('"id" is not allowed to be empty')
    );
  });

  // Test Ketiga Aplikasi harus menampilkan alert jika password kosong.
  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email Address"').type('kodokterbang@gmail.com');

    // klik tombol login tanpa mengisi password
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) =>
      expect(str).to.equal('"password" is not allowed to be empty')
    );
  });

  // Test keempat Aplikasi harus menampilkan alert jika email address atau password salah.
  it('should display alert when email address and password are wrong', () => {
    // simulasi pengguna mengisi email dan password salah
    cy.get('input[placeholder="Email Address"').type('emailsalah@gmail.com');
    cy.get('input[placeholder="Password"').type('password_salah');

    // simulasi pengguna menekan tombol login
    cy.get('button')
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) =>
      expect(str).to.equal('Email Address or password is wrong')
    );
  });

  // Test Kelima Aplikasi harus menampilkan homepage jika email address dan password benar.
  it('should display homepage when email address and password are correct', () => {
    // simulasi pengguna mengisi email dan password dengan benar
    cy.get('input[placeholder="Email Address"').type('kodokterbang@gmail.com');
    cy.get('input[placeholder="Password"').type('kodokterbang');
    // simulasi pengguna menekan tombol login
    cy.get('button')
      .contains(/^Masuk$/)
      .click();
    // verifikasikan elemen yang akan ditampilkan di homepage
    cy.get('.navbar').should('be.visible');
    cy.get('.app-content-main').should('be.visible');
  });
});
