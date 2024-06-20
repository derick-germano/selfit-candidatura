import React from "react";

export default function Experiencia() {
  return (
    <div id="experiencia" className="bg-red-500 ">
      <h2 className="text-2xl font-black text-center p-7 uppercase">
        experiências profissionais
      </h2>
      <div className="flex justify-center items-center text-center">
        <div className="p-5">
          <ul>
            <li>
              <strong>
                Acripel Distribuidora Pernambuco LTDA - Estoquista
              </strong>
              <br />
              <em>01/12/21 - 01/02/2024</em>
              <ul className="mt-2">
                <li>Recebimento de produtos</li>
                <li>Conferência</li>
                <li>Abastecimento</li>
                <li>Contagem de Estoque</li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>
                Clebson Dias do Nascimento Acessórios - Instalador de Som e
                Acessórios
              </strong>
              <br />
              <em>01/04/2016 - 07/06/2019</em>
              <ul className="mt-2">
                <li>Instalação de Insulfilm</li>
                <li>Instalação de som e acessórios</li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>
                Meira Lins LTDA - Aprendiz em Auxiliar administrativo
              </strong>
              <br />
              <em>20/01/2014 - 16/01/2015</em>
              <ul className="mt-2 mb-6">
                <li>Abastecimento de planilhas</li>
                <li>Preenchimento de manuais</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
