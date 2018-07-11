import { FormularioReativoModule } from './formulario-reativo.module';

describe('FormularioReativoModule', () => {
  let formularioReativoModule: FormularioReativoModule;

  beforeEach(() => {
    formularioReativoModule = new FormularioReativoModule();
  });

  it('should create an instance', () => {
    expect(formularioReativoModule).toBeTruthy();
  });
});
