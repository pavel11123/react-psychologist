import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="line"></div>
        <div className="footer-main">
          <div className="footer__docs">
            <a href="index.html">Политика конфиденциальности</a>
            <a href="index.html">Договор оферты</a>
          </div>
          <div className="line"></div>
          <div className="society">
            <div className="society__img">
              <img src="/img/icon/tg.png" alt="Телеграмм - Екатерина Славная" />
            </div>
            <div className="society__img">
              <img src="/img/icon/wp.png" alt="WhatsApp - Екатерина Славная" />
            </div>
            <div className="society__img">
              <img src="/img/icon/vk.png" alt="Вконтакте - Екатерина Славная" />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="footer-bottom">
        <a href="index.html">Сайт разработан командой Kowalenko Web-Studio</a>
      </div>
    </footer>
  );
}

export default Footer;
