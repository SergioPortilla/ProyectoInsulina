import { BackgroundSuccess, ConfirFail, IconConfirmation, InfoConfir } from './userExperienceStyle';

// Estandarizar componentes, esto no parece un atomo por que tiene datos quemados "img 2, texto de infoConfir"
export const Confirmation = () => {
  return (
    <BackgroundSuccess>
      <ConfirFail>
        <IconConfirmation src="../../../assets/images/icons/fail.svg" alt="Fail Icon icon" />
        <InfoConfir>Hubo un problema al modificar la solicitud del usuario</InfoConfir>
      </ConfirFail>
    </BackgroundSuccess>
  );
};
