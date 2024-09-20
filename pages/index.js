import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Investimento</title>
        <meta name="description" content="Tela de Investimento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" className={styles.logoImg} alt="Logo" />
        </div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Investir</a>
          <a href="#">Meus ativos</a>
          <a href="#">Carteira e extrato</a>
        </nav>
        <div className={styles.actions}>
          <img src="https://img.icons8.com/?size=100&id=22166&format=png&color=FFFFFF" alt="Carrinho" />
          <img src="https://img.icons8.com/?size=100&id=54481&format=png&color=FFFFFF" alt="Notificações" />
          <div className={styles.userProfile}>
            <span>Gabriel</span>
            <img src="https://img.icons8.com/?size=100&id=23264&format=png&color=FFFFFF" alt="Usuário" />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Investimento</h1>
        <div className={styles.contentSection}>
          <div className={styles.investmentContainer}>
            <div className={styles.valueBox}>
              <label htmlFor="valorInvestido">Valor investido</label>
              <input type="text" id="valorInvestido" placeholder="R$" className={styles.inputField} />
              <small>Mínimo R$1.000,00</small>
              <p>Disponível R$300.000,00</p>
            </div>
            <div className={styles.paymentContainer}>
              <label>Modo de pagamento</label>
              <br></br>
              <br></br>

              <div className={styles.paymentOption}>
                <input type="radio" name="payment" value="pix" />
                <label>
                  <img src="https://img.icons8.com/?size=100&id=Dk4sj0EM4b20&format=png&color=000000" alt="PIX" />
                  PIX
                </label>
              </div>
              <div className={styles.paymentOption}>
                <input type="radio" name="payment" value="saldo-em-conta" />
                <label>
                  💰 Saldo em conta
                </label>
              </div>
              <div className={styles.paymentOption}>
                <input type="radio" name="payment" value="cartao" />
                <label>
                  💳 Cartão de crédito
                </label>
              </div>
              <div className={styles.paymentOption}>
                <input type="radio" name="payment" value="carteira-digital" />
                <label>
                  <img src="https://img.icons8.com/?size=100&id=13016&format=png&color=000000" alt="Carteira" />
                  Carteira digital
                </label>
              </div>
            </div>
          </div>
          <div className={styles.summarySection}>
            <h2 className={styles.sectionTitle}>Resumo</h2>
            
            {/* Mensagem de Aviso */}
            <div className={styles.warningMessage}>
              <img src="https://img.icons8.com/?size=100&id=11691&format=png&color=000000" alt="Aviso" width={24} height={24} className={styles.warningIcon} />
              <span>Casos não atingido o valor programado, os valores de compra serão devolvidos no final do período.</span>
            </div>

            <div className={styles.summaryItem}>
              <img src="/placeholder.png" alt="Resumo" width={60} height={60} className={styles.summaryImage} />
              <div>
                <h5>TMX Monte Azul <span className={styles.ccbTag}>CCB</span></h5>
              </div>
            </div>
            <div className={styles.summaryItem}>
              <span>Valor investido:</span>
              <span>R$1.000,00</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Modo de pagamento:</span>
              <span>PIX</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total:</span>
              <span>R$1.000,00</span>
            </div>
            <button className={styles.btnPayment}>Realizar pagamento</button>
          </div>
        </div>
      </main>
    </div>
  );
}