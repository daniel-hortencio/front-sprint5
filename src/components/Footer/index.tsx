import './styles.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <section className="footer__contact">
      <div className="footer__container contact">
        <p className="contact__info">Receba ofertas e novidades por e-mail</p>
        <form action="/">
          <input
            className="contact__input"
            type="email"
            placeholder="Digite aqui seu e-mail"
          />
          <button className="contact__btn" type="submit">
            <span className="contact__btn__txt">Cadastrar</span>
          </button>
        </form>
        <p className="contact__msg-app">Baixe nosso App</p>
        <div className="apps">
          <a href="/">
            <img
              className="apps__img"
              src="assets/google-play.webp"
              alt="Google Play"
            />
          </a>
          <a href="/">
            <img
              className="apps__img"
              src="assets/app-store.webp"
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </section>

    <section className="footer__links links">
      <div className="footer__container links">
        <div className="links__contacts">
          <div className="col">
            <a href="/" className="contact-icon">
              <img
                className="contact-icon__img"
                src="assets/ico-attendance.svg"
                alt="Atendimento"
              />
              <p className="contact-icon__text">Atendimento</p>
            </a>
            <a href="/" className="contact-icon">
              <img
                className="contact-icon__img"
                src="assets/ico-faq.svg"
                alt="Perguntas Frequentes"
              />
              <p className="contact-icon__text">Perguntas Frequentes</p>
            </a>
          </div>
          <div className="col">
            <a href="/" className="contact-icon">
              <img
                className="contact-icon__img"
                src="assets/ico-invoice-and-statement.svg"
                alt="Fatura e Extrato"
              />
              <p className="contact-icon__text">Fatura e Extrato</p>
            </a>
            <a href="/" className="contact-icon">
              <img
                className="contact-icon__img"
                src="assets/ico-work-with-us.svg"
                alt="Trabalhe Conosco"
              />
              <p className="contact-icon__text">Trabalhe Conosco</p>
            </a>
          </div>
        </div>
        <ul className="links__companies company-links">
          <li className="company-links">
            <h3 className="company-links__title">Cartão Riachuelo</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Midway Financeira
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Saiba como adquirir
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Veja sua fatura e extrato
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Buscando quitar suas dívidas?
                </a>
              </li>
            </ul>
          </li>
          <li className="company-links">
            <h3 className="company-links__title">Sobre a Riachuelo</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  A Empresa
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Portal de Fornecedores
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Relação com Investidores
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Assessoria de Imprensa
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Trabalhe Conosco
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Programa Jovem Aprendiz
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Cadastro de Startups
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  {' '}
                  Mapa do Site{' '}
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  {' '}
                  Guide Shop{' '}
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Venda na Riachuelo Marketplace
                </a>
              </li>
            </ul>
          </li>
          <li className="company-links">
            <h3 className="company-links__title">Moda que Transforma</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Na prática
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Entre Costuras
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Jeans Mais Transparente
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Ações Covid-19
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Free Free
                </a>
              </li>
            </ul>
          </li>
          <li className="company-links">
            <h3 className="company-links__title">Ajuda</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Atendimento
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Perguntas Frequentes
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Trocas e Devoluções
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Portal da Privacidade
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Política de Privacidade
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Termos e Condições de Uso
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Regras e Resultados de Sorteios
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section className="footer__payment">
      <div className="footer__container payment">
        <div className="payment__alternatives">
          <h3 className="payment__title">Formas de Pagamento</h3>
          <img
            className="payment__img"
            src="assets/ico-cartao-rchlo1.webp"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-rchlo2.webp"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-rchlo3.webp"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-visa.png"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-master.webp"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-amex.webp"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-diners.png"
            alt=""
          />
          <img
            className="payment__img"
            src="assets/ico-cartao-elo.png"
            alt=""
          />
          <img className="payment__img" src="assets/ico-boleto.webp" alt="" />
          <img className="payment__img" src="assets/ico-paypal.png" alt="" />
        </div>
        <div className="payment__social">
          <h3 className="payment__title">Siga a Riachuelo</h3>
          <div className="social__icons">
            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-facebook.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-instagram.svg"
                  alt=""
                />
              </a>
              <p className="icon__text">RCHLO</p>
            </div>

            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-instagram.svg"
                  alt=""
                />
              </a>
              <p className="icon__text">CASA RCHLO</p>
            </div>

            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-pinterest.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-twitter.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-youtube.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="social__icon icon">
              <a href="/">
                <img
                  className="icon__img"
                  src="assets/ico-linkedin.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="payment__accessibility">
          <h3 className="payment__title">Acessibilidade</h3>
          <img src="assets/ico-a11y.webp" alt="" />
        </div>
      </div>
    </section>

    <section className="footer__bottom">
      <div className="footer__container bottom">
        <div className="copyright">
          <p className="copyright__text">
            © Copyright 2017 - 2019. Todos os direitos reservados. Lojas
            Riachuelo S/A. Rua Landri Sales, 1.070, G02 Anexo B, Guarulhos - SP
            - Brasil
            <br />
            CEP 07250-130 CNPJ 33.200.056/0441-97 | IE 796.420.926.112 | SAC
            4003-0515.Direção de fotografia de produtos por Adriano Adrião.
            <br />
            Pagamento com Cartão Riachuelo, parcelas mínimas de R$ 15,00. Para
            os demais cartões Visa, Mastercard, Elo, Diners, Hipercard e
            American Express, parcelas mínimas de R$ 30,00.
            <br />
            * COMPRE NO SITE e RETIRE NA LOJA com FRETE GRÁTIS, conforme lojas
            participantes. Consulte as lojas participantes nas opções de frete
            do seu pedido, conforme CEP de entrega cadastrado.
            <br />
            Frete único de R$ 4,99 para Sul e Sudeste em compras a partir de R$
            129,00. Demais regiões o valor estará sujeito a variações. Condição
            por tempo indeterminado, para tipo de entrega “normal”.
            <br />
            Preços, promoções, condições de pagamento, valores de frete e
            disponibilidade de estoque são aplicados somente nas compras
            efetuadas na loja online Riachuelo. Existe uma limitação de peças
            iguais no mesmo pedido que muda de acordo com o tipo de produto.
            <br />
            Em caso de divergência de valores entre a página do produto e a
            Sacola de Compras, a Riachuelo se reserva a garantir o valor exibido
            na Sacola de Compras.
          </p>
        </div>

        <div className="copyright__stamp">
          <img src="assets/ra1000.webp" alt="" />
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
