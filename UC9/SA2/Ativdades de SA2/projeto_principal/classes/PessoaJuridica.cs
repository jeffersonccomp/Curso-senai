using System.Text.RegularExpressions;
using Uc9_proj.interfaces;


namespace Uc9_proj.classes
{
  public class PessoaJuridica : Pessoa, IPessoaJuridica
    {
        public string? cnpj { get; set; }
        public string? razaoSocial { get; set; }

        public string caminho { get; private set; } = "Database/PessoaJuridica.csv";

        public override float PagarImposto(float rendimento)
        {
            /*
             vamos utilizar a seguinte escala: 
             até 1500 - 3%
             de 1500 a 3500 - 5% de impostos
             de 3500 a a 6000 - 7% de impostos
             acima de 6000 - 9% de impostos
             */

          if (rendimento <= 1500)
            {
               return MathF.Round((rendimento * 0.03f), 2);
            }
          else if (rendimento > 1500 && rendimento <= 3500)
            {
               return MathF.Round((rendimento * 0.05f), 2);
            } 
          else if (rendimento > 3500 && rendimento <= 6000)
            {
               return MathF.Round((rendimento * 0.07f), 2);
            } 
          else
            {
               return MathF.Round((rendimento * 0.09f), 2);
            }
        }

        public bool ValidarCnpj(string cnpj)
        {
          if ((cnpj.Length == 18) || (cnpj.Length == 14))
           {
              if (Regex.IsMatch(cnpj, @"(^(\d{2}.\d{3}.\d{3}/\d{4}-\d{2})|(\d{14})$)"))
                {
                    if (cnpj.Length == 18)
                     {
                        //o Substring vai iniciar no caracter 11 caracteres e pegar os próximos 4
                        if (cnpj.Substring(11, 4) == "0001")
                            return true;
                     }
                    else if (cnpj.Length == 14)
                     {
                        if (cnpj.Substring(8, 4) == "0001")
                           return true;
                     }
                }
                return false;
            }
            return false;
        }

        public void Inserir(PessoaJuridica pj)
          {
            VerificarPastaArquivo(caminho);
            string[] pjString = { $"{pj.nome}, {pj.cnpj}, {pj.razaoSocial},{pj.rendimento}" };
            File.AppendAllLines(caminho, pjString);
          }

        public List<PessoaJuridica> Ler()
         {
            List<PessoaJuridica> listaPj = new List<PessoaJuridica>();

           if (File.Exists(caminho))
            {
                string[] linhas = File.ReadAllLines(caminho);
                foreach (string cadaLinha in linhas)
                {      
                    string[] atributos = cadaLinha.Split(",");

                    PessoaJuridica cadaPj = new PessoaJuridica();

                    cadaPj.nome = atributos[0];
                    cadaPj.cnpj = atributos[1];
                    cadaPj.razaoSocial = atributos[2];
                    cadaPj.rendimento = float.Parse(atributos[3]);
                    
                    listaPj.Add(cadaPj);
                }
                return listaPj;
            } else 
                {
                    Console.WriteLine("A Lista está vazia");                
                    Thread.Sleep(3000);
                    return listaPj;
                 }                      
         }
    }
}