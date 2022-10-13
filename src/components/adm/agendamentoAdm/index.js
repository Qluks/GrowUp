import React from "react";

export default function Agendamento(props) {
    return (
        <>
            <tr>
                <td class="data">{props.data}</td>
                <td class="nome">{props.nome}</td>
                <td>
                    <select class="status" onchange="mudarCor(this)">
                        <option value="concluido" id="concluido">Concluído</option>
                        <option value="pendente" id="pendente">Pendente</option>
                        <option value="analise" id="analise" selected>Em análise</option>
                    </select>

                </td>
                <td class="exibirMais">
                    <label>
                        <input type="checkbox" id="exp_1" onclick="expandir()" />
                        <span><img src="https://api.iconify.design/bi/play-circle-fill.svg?color=white" alt="seta dentro de um  circulo" style={{height: "25px;", width: "auto;", cursor: "pointer;"}} /></span>
                    </label>
                </td>
            </tr>
            <tr class="informes" id="inf4" style={{display: "none;"}}>
                <td>
                    <div style={{float:"left;"}}>{props.email}</div><br />
                    <div style={{float:"left;"}}>{props.telefone}</div><br />
                    <div style={{float:"left;"}}>{props.servico}</div><br /><br />
                    <div style={{float:"left;", marginLeft: "3px;"}}>DOCUMENTAÇÃO: </div><br />
                    <input type="button" value="CPF.pdf" style={{margin: "3px;", marginLeft: "-30px;", marginTop: "10px;", backgroundColor: "transparent;", borderColor:"#050539;", borderWidth: "1px;", borderRadius: "4px;", cursor: "pointer;"}} />
                    <input type="button" value="CPF.pdf" style={{margin: "3px;", backgroundColor: "transparent;", borderColor:"#050539;", borderWidth: "1px;", borderRadius: "4px;", cursor: "pointer;"}} />
                    <input type="button" value="CPF.pdf" style={{margin: "3px;", backgroundColor: "transparent;", borderColor:"#050539;", borderWidth: "1px;", borderRadius: "4px;", cursor: "pointer;"}} /><br />
                </td>
                <td>
                    <textarea name="descricao" id="descricao" cols="30" rows="10" placeholder="Adicionar feedback:" style={{backgroundColor: "#dcdbe570;", borderColor:"#bcbcbc;", marginLeft: "50px;", borderRadius: "5px;", width: "400px;", padding: "5px;", height: "90px;"}}></textarea>
                </td>
                <td>
                    <strong style={{fontSize: "20px;", marginLeft:"44px;"}}> Marcar data<br /></strong>
                    <input type="date" id="data" style={{marginTop: "10px;", borderRadius: "7px;", borderWidth: "1px;", borderColor: "#bcbcbc;", backgroundColor: "transparent;", height: "30px;", width: "120px;", marginLeft:"45px;" }}/>
                </td>
            </tr>
        </>
    );
}