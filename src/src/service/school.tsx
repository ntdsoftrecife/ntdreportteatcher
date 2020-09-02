import React from 'react';
import { useComunication, Terro } from './cominication';


export type Tscholl = {
    Codigo: number,
    Nome: string,
    AnoBase: 2020,
    Endereco: string,
    Fone: string,
    Fax: string,
    NomeSecret: string,
    RegSec: string,
    Diretor: string,
    DiretorReg: string,
    Cidade: string,
    UF: string,
    CEP: string,
    DiasLetivos: 200,
    MinimaRecupeacao: string,
    CNPJ: string,
    Obs: string,
    Email: string,
    Ocioso: 180,
    OciosoTexto: string,
    Texto_Cedente: string,
    Juros: 0.1,
    Desconto: 0 | 1,
    Local_Pgto: string,
    Multa: number,
    TextoCedente2: string,
    TextoCedente3: string,
    Prefeitura: string,
    RepFalta: 51,
    ObsConceito: string,
    TipoNota: string,
    Resultado: string,
    ResultadoAprovado: string,
    TipoBoletim: string,
    Arredondar: 0 | 1,
    FormulaDimensao: 0 | 1,
    Juros_Moeda: 0.1,
    Multa_Porc: number,
    TemJuros: 0 | 1,
    TemMulta: 0 | 1,
    TipoJuros: number,
    TipoMulta: 0 | 1,
    DiasParaJuros: number,
    DiasParaMulta: number,
    TextoCedente4: string,
    ExtSite: string,
    PriordadeBoleto: -1,
    Recup_Final_Media: string,
    Result_Recup_Final: string,
    Boletim_Personalizado: -1,
    Legenda_Boletim: string,
    Info_Comp_Historico: string,
    Layout_Boletim: 0 | 1,
    Lei_Historico: string,
    Boletim_Assinatura: 0 | 1,
    Boletim_Data_Cidade: 0 | 1,
    Boletim_Legenda: 0 | 1,
    Boletim_Observacao: 0 | 1,
    Boletim_Protocolo: 0 | 1,
    Boletim_Total_Faltas: 0 | 1,
    Meia_Pagina: 0 | 1,
    Porta: string,
    Backup_Diario: -1,
    PDV_Novo: 0 | 1,
    PDV_Antigo: 0 | 1,
    Senha_Adm: string,
    Cod_Barras_Tipo: string,
    Atualizar: number,
    Excluir: 0 | 1,
    Multiplos_Bancos: number,
    TextoCedente5: string,
    TextoCedente6: string,
    TextoCedente7: string,
    TextoCedente8: string,
    Juros_Dias_Corridos: number,
    Multa_Cobrar_Cada: number,
    Multa_Cobrar_Qtde_Dia: 30,
    NTD_Adm: 0 | 1,
    TextoCedente9: string,
    TextoCedente10: string,
    Nao_Testar_Conexao: 0 | 1,
    So_Produto_Criar_Mens: number,
    PC_Lib: 0 | 1,
    SMTT_EMTU: string,
    ViceDiretor: string,
    Cordenador: string,
    CNPJ_SMTT_EMTU: string,
    NomeRaz_SMTT_EMTU: string,
    Endereco_SMTT_EMTU: string,
    Complemento_SMTT_EMTU: string,
    Bairro_SMTT_EMTU: string,
    CEP_SMTT_EMTU: string,
    Rede_SMTT_EMTU: string,
    AtualizarData: string,
    MultaQuebraContrato: 10,
    ID_Exc_Rec: string,
    NossoNumRetorno: 0 | 1,
    Insc_Municipal: string,
    Opcao_Simples: string,
    Cod_Servico_Federal_LC: string,
    CNAE: string,
    Aliquota: string,
    COFINS: string,
    CSLL: string,
    INSS: string,
    IRPJ: string,
    PIS_PASEP: string,
    RPS_Info: string,
    ISS: string,
    Unidade: string,
    Aluno_Bloq_Doc: number,
    NossoNum9Tem: 0 | 1,
    Senha_Adm_Desb_Aluno: string,
    Juros_Cobrar_Cada: 0 | 1,
    Juros_Cobrar_Qtde_Dia: 0 | 1,
    Desconto_Automatico: number,
    Desconto_Cobrar_Qtde_Dia: string,
    Bairro: string,
    Numero: string,
    TipoEnd_NF: string,
    CEP_NF: string,
    Endereco_NF: string,
    NumeroEnd_NF: string,
    Bairro_NF: string,
    Cidade_NF: string,
    UF_NF: string,
    Complemento_NF: string,
    RazaoSocial_NF: string,
    CSM: string,
    CadastroEscolar: string,
    Regime_Especial_Trib: string,
    IncentivadorCultural: string,
    CodigoMunicipio: string,
    on_jurosnao: 0 | 1,
    on_multanao: 0 | 1,
    on_descontonao: 0 | 1,
    site: string
}


function useScholl(){
    return useComunication<Tscholl>('/scholl')
}


export default useScholl;