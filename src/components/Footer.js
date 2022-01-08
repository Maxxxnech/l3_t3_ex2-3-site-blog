import React, { Component } from "react";
import "./css/Footer.css";

export default class Footer extends Component {
  /*constructor(props) {
    super(props);
  }*/
  /**
   * Форматирует телефон для вставки в ссылку
   * href="tel:+1234567890"
   */
  telHrefFormatter(tel) {
    return "tel:" + tel.replace(/\s|\(|\)|-/gi, "");
  }
  /**
   * Обработка элемента массива данных подвала
   * @param {String || Number || Boolean || Object} el - Элемент массива
   * @returns String || Number
   */
  parseElement(el) {
    if (typeof el === "string" || typeof el === "number") {
      return el;
    } else if (typeof el === "object") {
      if (el.tel) {
        return <a href={this.telHrefFormatter(el.tel)}>{el.tel}</a>;
      } else {
        return JSON.stringify(el);
      }
    } else if (typeof el === "boolean") {
      return String(el);
    }
  }
 
  /**
   * Создает массив с вложенными массивами заданной длины
   * [...] -> [[...], [...], [..]]
   * @param {Array} arr исходный массив
   * @param {Number} maxLength - длина подмассива
   */
  arraySplitter(arr, maxLength){
    var result = [];
    for(let i = 0; i < arr.length; i += maxLength){
      result.push(arr.slice(i, i + maxLength));
    }
    return result;
  }
  /**
   * Заполняет таблицу значениями построчно
   * При превышении максимального количества столбцов создает новую строку
   */
  tableFiller(arr, i, columnNumber = 6) {
    var rowaArray = this.arraySplitter(arr, columnNumber);
    return (
      rowaArray.map((nestedRow, nestedIndex)=>(
      <tr key={i + ' - ' + nestedIndex}>
        {nestedRow.map((el, k) => (
          <td key={k}>{this.parseElement(el)}</td>
        ))}
      </tr>
      )
      )
    );
  }
  
  fakeTableFiller(arr, i, columnNumber = 6) {
    return (
      <div className="footerTableRow" key={i} >
        {arr.map((el, k) => (
          <div className="footerTableRow" key={k}>{this.parseElement(el)}</div>
        ))}
      </div>
    );
  }
  render() {
    var footerItems = this.props.footerItems;
    return (
      <footer className="mainFooter">
        <table>
          <thead>
            <tr>
              <th>Свяжитесь с нами!</th>
            </tr>
          </thead>
          <tbody>
            {footerItems &&
              footerItems.map &&
              footerItems.map((el, i) => this.tableFiller(el, i))}
          </tbody>
          <tfoot>
            <tr>
              <td>&#xA9; {this.props.copyright}</td>
            </tr>
          </tfoot>
        </table>
      </footer>
    );
  }
}

