import React, { Component } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import SelectBox from '../SelectBox';
import { states, cities, months, years, plots } from '../../constants/formOptions';
import validationUtil from '../../utils/validationUtil';
import Cards from 'react-credit-cards';
import InputMask from 'react-input-mask';

class FormPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sendAddress: 'sameAddress',
      invalidForm: false,
      zipcode: '',
      street: '',
      number: '',
      compl: '',
      state: '',
      city: '',
      card_name: '',
      card_number: '',
      card_month: '',
      card_year: '',
      cvc: '',
      plots: '',
      card_expiry: '',
      focused: 'card_name',
      rules: [
        {
          name: 'zipcode',
          validations: ['required'],
          address: 'otherAddress'
        },
        {
          name: 'street',
          validations: ['required'],
          address: 'otherAddress'
        },
        {
          name: 'number',
          validations: ['required', 'number'],
          address: 'otherAddress'
        },
        {
          name: 'state',
          validations: ['required'],
          address: 'otherAddress'
        },
        {
          name: 'city',
          validations: ['required'],
          address: 'otherAddress'
        },
        {
          name: 'card_number',
          validations: ['required', 'number'],
          address: null
        },
        {
          name: 'card_name',
          validations: ['required'],
          address: null
        },
        {
          name: 'card_month',
          validations: ['required', 'number'],
          address: null
        },
        {
          name: 'card_year',
          validations: ['required', 'number'],
          address: null
        },
        {
          name: 'cvc',
          validations: ['required', 'number'],
          address: null
        },
        {
          name: 'plots',
          validations: ['required'],
          address: null
        },
      ]
    };
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.validate();

    if (!this.state.invalidForm) {
      this.clearValidate();
      this.clearForm();
    }
  }

  validate() {
    let invalidForm = false;

    this.state.rules.map(field => {
      if ((validationUtil.isEqualObject(field.validations, ['required']) && this.isSameAddress(field.address))) {
        if (validationUtil.isEmpty(this.state[field.name])) {
          invalidForm = true;
          this._setFieldError(field.name, true);
        } else {
          this._setFieldError(field.name, false);
        }
      }

      if (validationUtil.isEqualObject(field.validations, ['required', 'number']) && this.isSameAddress(field.address)) {
        if (validationUtil.isEmpty(this.state[field.name]) || !validationUtil.isNumber(this.state[field.name])) {
          invalidForm = true;
          this._setFieldError(field.name, true);
        } else {
          this._setFieldError(field.name, false);
        }
      }
    });

    this.state.invalidForm = invalidForm;

    this.setState(this.state);
  }

  _setFieldError(fieldName, error = false) {
    this.state[`${fieldName}Error`] = error;
  }

  isSameAddress(address) {
    if (address === null) return true;
    return (this.state.sendAddress === address ? true : false);
  }

  handleClick(event) {
    this.setState({
      sendAddress: event.target.value
    });

    if (event.target.value === 'sameAddress') {
      this.clearValidateAddress();
    }

    if (event.target.name === 'cvc') {
      this.setState({
        focused: event.target.name
      });
    }
  }

  clearValidateAddress() {
    this.setState({
      zipcodeError: false,
      streetError: false,
      numberError: false,
      stateError: false,
      cityError: false
    });
  }

  clearValidate() {
    this.clearValidateAddress();

    this.setState({
      sendAddress: 'sameAddress',
      invalidForm: false,
      card_nameError: false,
      card_numberError: false,
      card_monthError: false,
      card_yearError: false,
      cvcError: false,
      plotsError: false,
    });
  }

  clearForm() {
    this.setState({
      zipcode: '',
      street: '',
      number: '',
      compl: '',
      state: '',
      city: '',
      card_name: '',
      card_number: '',
      card_month: '',
      card_year: '',
      cvc: '',
      plots: '',
    });
  }

  handleBlurCVC(event) {
    this.setState({
      focused: 'card_name'
    });
  }

  render() {
    let showFieldsAddress = (this.state.sendAddress === 'sameAddress' ? true : false);

    return(
      <form onSubmit={this.onSubmit.bind(this)} className="form__horizontal form">
        <div className="form__buttons__address form__row">
          <p className="form__legend">Endereço de cobrança</p>

          <Button 
            onClick={this.handleClick.bind(this)}
            className={showFieldsAddress ? 'button__success button' : 'button'}
            value="sameAddress"
          >É o mesmo da entrega</Button>
          <Button
            onClick={this.handleClick.bind(this)}
            className={!showFieldsAddress ? 'button__success button' : 'button'}
            value="otherAddress"
          >É diferente da entrega</Button>
        </div>
        
        <div className={showFieldsAddress ? 'form__row__hidden' : ''}>
          <div className="form__row">
            <div className="input__group">
              <label htmlFor="zipcode">CEP</label>
              <div className="input__group__field input__group__field__cep">
                <InputMask
                  className="input-field input-field__cep"
                  type="tel"
                  name="zipcode" 
                  id="zipcode"
                  onChange={this.onChange.bind(this)}
                  value={this.state.zipcode}
                  data-error={this.state.zipcodeError}
                  mask="99999-999"
                  maskChar=""
                />
              </div>
              <a className="form__link" href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm" target="_blank">
                Não sei meu CEP
              </a>
            </div>
          </div>

          <div className="form__row">
            <p className="form__legend">Confirme seu endereço de cobrança</p>

            <div className="input__group input__group__break">
              <label htmlFor="street">Logradouro</label>
              <div className="input__group__field input__group__field__street input__group__mr25">
                <InputField 
                  className="input-field__street input-field" 
                  name="street" 
                  id="street"
                  onChange={this.onChange.bind(this)}
                  value={this.state.street}
                  data-error={this.state.streetError}
                />
              </div>

              <div className="input__group__wrapper">
                <label htmlFor="number">Número</label>
                <div className="input__group__field input__group__field__number">
                  <InputField
                    type="tel"
                    name="number"
                    id="number" 
                    onChange={this.onChange.bind(this)}
                    value={this.state.number}
                    data-error={this.state.numberError}
                    maxLength="8"
                  />
                </div>
              </div>
            </div>

            <div className="input__group input__group__break">
              <label htmlFor="compl">Complemento</label>
              <div className="input__group__field input__group__field__compl input__group__mr25">
                <InputField 
                  className="input-field__street input-field" 
                  name="compl" 
                  id="compl"
                  onChange={this.onChange.bind(this)}
                  value={this.state.compl}
                />
              </div>

              <label htmlFor="estado">UF</label>
              <div className="input__group__field input__group__field__state input__group__select">
                <SelectBox 
                  name="state"
                  options={states}
                  onChange={this.onChange.bind(this)}
                  value={this.state.state}
                  data-error={this.state.stateError}
                />
              </div>
            </div>

            <div className="input__group input__group__break">
              <label htmlFor="cidade">Cidade</label>
              <div className="input__group__field input__group__field__city input__group__select">
                <SelectBox 
                  name="city" 
                  options={cities}
                  onChange={this.onChange.bind(this)}
                  value={this.state.city}
                  data-error={this.state.cityError}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form__row">
          <p className="form__legend">Dados do cartão</p>

          <Cards
            cvc={this.state.cvc}
            number={this.state.card_number}
            name={this.state.card_name}
            locale={{ valid: 'MÊS/ANO' }}
            placeholders={ { name: 'NOME COMPLETO' } }
            expiry={(this.state.card_month < 10 ? this.state.card_month : this.state.card_month) + this.state.card_year}
            focused={this.state.focused}
          />

          <div className="input__group input__group__break">
            <label htmlFor="card_number">Número</label>
            <div className="input__group__field input__group__field__card_number input__group__mr25">

              <InputMask
                name="card_number" 
                id="card_number"
                className="input-field"
                onChange={this.onChange.bind(this)}
                value={this.state.card_number}
                data-error={this.state.card_numberError}
                mask="9999 9999 9999 9999"
                maskChar=""
              />
            </div>

            <label htmlFor="card_name">Nome Completo</label>
            <div className="input__group__field input__group__field__card_name">
              <InputField
                name="card_name"
                id="card_name"
                onChange={this.onChange.bind(this)}
                value={this.state.card_name}
                data-error={this.state.card_nameError}
                maxLength="30"
              />
            </div>
          </div>

          <div className="input__group input__group__break">
            <label htmlFor="card_date_month">Validade</label>
            <div className="input__group__field input__group__field__dates input__group__mr25">
              <div className="input__group__field input__group__field__month input__group__select">
                <SelectBox 
                  name="card_month"
                  options={months}
                  onChange={this.onChange.bind(this)}
                  value={this.state.card_month}
                  data-error={this.state.card_monthError}
                />
              </div>
              <div className="input__group__field input__group__field__year input__group__select">
                <SelectBox 
                  name="card_year"
                  options={years}
                  onChange={this.onChange.bind(this)}
                  value={this.state.card_year}
                  data-error={this.state.card_yearError}
                />
              </div>
            </div>

            <label htmlFor="cvc">Código de segurança</label>
            <div className="input__group__field input__group__field__card_code">
              <InputField
                type="tel"
                name="cvc"
                id="cvc"
                onChange={this.onChange.bind(this)}
                value={this.state.cvc}
                data-error={this.state.cvcError}
                maxLength="4"
                onClick={this.handleClick.bind(this)}
                onBlur={this.handleBlurCVC.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className="form__row">
          <p className="form__legend">Valor e parcelamento</p>

          <div className="input__group input__group__break">
            <div className="input__group__field input__group__field__plots input__group__select">
              <SelectBox 
                name="plots"
                options={plots}
                onChange={this.onChange.bind(this)}
                value={this.state.plots}
                data-error={this.state.plotsError}
              />
            </div>
          </div>
        </div>

        <div className="submit">
          <Button className="button__back button">Voltar</Button>
          <Button type="submit" className="button__success button">Finalizar Compra</Button>
        </div>
      </form>
    )
  }
}

export default FormPayment;