export class Password{
  idUser: number | undefined;
  date: Date | undefined;
  token: string| undefined;
  idZoneGeographique: number | undefined;
  idPays: number | undefined;
  idEtablissement: number | undefined;
  newPassword: string| undefined;
  // tslint:disable-next-line:max-line-length
  constructor(idUser: number | undefined, date: Date | undefined, token: string | undefined,
              idZoneGeographique: number | undefined, idPays: number | undefined,
              idEtablissement: number | undefined, newPassword: string | undefined) {
    this.idUser = idUser;
    this.date = date;
    this.token = token;
    this.idZoneGeographique = idZoneGeographique;
    this.idPays = idPays;
    this.idEtablissement = idEtablissement;
    this.newPassword = newPassword;
  }
}
