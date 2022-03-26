import React from "react";
import "./header.scss";
import logo_header from "../img/logo_header.png";
import title from "../img/fv_title.png";
import decor from "../img/fv_decor_1.png";
import text_cordura from "../img/text_cordura.png";
import text_vegetable from "../img/text_vegetable.png";

const Header = () => {
  return (
    <div className="header">
      <div className="banner1">
        <div className="banner">
          <img src={logo_header} alt="" />
        </div>
        <div className="title">
          <div className="title__logo">
            <img src={title} alt="" />
            <h1>
              Relaxing=「リラックス」キャンプや 自然の中だけでなく、
              街でも着こなせる清潔感あるデザイン、
              リラックスできる機能素材のセレクトに 重点を置いたシリーズ。
            </h1>
          </div>
          <img className="decor" src={decor} alt="" />
        </div>
      </div>
      <div className="banner2">
        <div className="border1"></div>
        <div className="banner2_intro">
          <div className="intro1">
            <div className="intro1__content">
              <img src={text_cordura} alt="" />
              <h2>コーデュラ®ファブリック</h2>
              <p>
                CORDURA®(コーデュラ®)ファブリックは摩耗、引き裂き、擦り切れに強く、日常生活における利用に対して、優れた耐久性と持続性を提供します。日本では、カバン、アウトドアウェア、ファッション、ワークウェアと更なる広がりを見せています。CORDURA®(コーデュラ®)は優れた耐久性だけではなく、快適性も提供しアクティブウェアとして気軽に着ていただけます。※CORDURA®(コーデュラ®)は、耐久性に優れたファブリックに対するインビスタ(INVISTA)社の登録商標です。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner3">
        <div className="border2"></div>
        <div className="banner3_intro">
          <div className="intro2">
            <div className="intro2__content">
              <img src={text_vegetable} alt="" />
              <h2>コーデュラ®ファブリック</h2>
              <p>
                VegetableCOLORIZEは、廃棄予定の野菜&果物から染料を抽出し、合成繊維にナチュラルな染色と高機能(吸水拡散、保湿、抗菌防臭)を付与します。我々SETOUTは、ブランド名を瀬戸内より発進するアウトドアウェアという意味合いから名付けており、今回は瀬戸内海に位置する小豆島の廃棄予定オリーブから染料を抽出して、03KHAKIカラーを染色しております。(※ブラック、チャコールは竹、ベージュは米から抽出)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
