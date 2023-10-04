import tex1 from "../../assets/tex1.png";
import tex2 from "../../assets/tex2.png";
import tex3 from "../../assets/tex3.png";
export default function About() {
  return (
    <main className="about">
      <div className="container">
        <div className="inner">
          <div>
            <div className="about-title">Bizning tariximiz</div>
            <p>
              “OKS TECHNOLOGIES” O‘zbekistondagi axborot-kommunikatsiya
              texnologiyalari sohasidagi yetakchilardan biri bo‘lib, o‘z
              segmentida 10 yildan ortiq tajribaga ega yuqori toifali
              mutaxassislar jamoasidir. Biz davlat idoralari va xususiy
              kompaniyalarning geografik joylashuvi, faoliyat turi, buyurtmaning
              murakkabligi va yo'nalishidan qat'iy nazar istalgan loyihalarini
              raqamlashtirish imkoniga egamiz Faoliyat davomida 400 ga yaqin
              bir-birini takrorlamas muvaffaqiyatli loyihalar bajarilgan bo'lib,
              ulardan eng yiriklari bilan tanishib chiqishingiz mumkin:
              O'zbekiston milliy axborot agentligi Kun.uz - O'zbekiston va jahon
              yangiliklari Eksportchilarga subsidiya berish ERP tizimi
              Tribuna.uz - Sport yangiliklari Eksportchilar portali va boshqa
              ko'plab loyihalarimiz hamkorlar hamda foydalanuvchilar tomonidan
              ijobiy baholanmoqda. Yirik loyihalarimizdan "Apoint" hamda
              "Finiso" Sturt UP lari hozirgi kunda jahon bozorida o'zining
              o'rnini egallash uchun shiddat bilan faoliyat olib bormoqda
              Tugallangan har bir loyihamiz mijozimizning barcha istak va
              g'oyalarini to'liq o'zida mujassam etgan holda bir qarashda o'zini
              samarali namoyon etadi. Biz loyihaga ko'lami va turidan qat'iy
              nazar puxta yondashishni ustuvor vazifa deb bilamiz va amalga
              oshiramiz. Buning uchun ishni tizimli tashkil qilib, sohaning eng
              yaxshi mutaxassislarini jalb qilamiz. Biz veb-dasturlash, kreativ
              dizayn yechimlari sohasidagi xizmatlarni taklif qilamiz. Agarda
              sizda hali loyiha qanday bo'lishi haqida aniq fikr va qaror mavjud
              bo'lmasa, biz sizga avvalo, loyiha menejerini biriktiramiz.
              So'ngra "First concept than design" qonuniyatiga asoslanib,
              vazifani bajarish uchun loyihani, avvalo, o'rganamiz hamda
              tajribali mutaxassislar tomonidan konsepsiya ishlab chiqib, loyiha
              dizayni (eskiz)ni tayyorlaymiz. Bu esa istalgan loyihani
              muvaffaqiyatli amalaga oshirish garovi bo'ladi. Orzuyingizdagi
              web-dastur, kreativ ammo qulay dizayn va eng yaxshi mobil ilovani
              biz bilan birgalikda tayyorlang!
            </p>
          </div>
          <div>
            <div className="about-title">
              Gilamni togri yuvish va foydalanish haqida foydali malumotlar
            </div>
            <ol type="1">
              <li>
                <div className="li-title">
                  Haftada bir marta changyutgichda tozalab yuting.
                </div>
                <p>
                  Bu orqali uning orqalarida changlar va sifatni buzuvchi
                  maddalar to’planmaydi
                </p>
                <img src={tex1} alt="" />
              </li>
              <li>
                <div className="li-title">
                  Haftada bir marta changyutgichda tozalab yuting.
                </div>
                <p>
                  Bu orqali uning orqalarida changlar va sifatni buzuvchi
                  maddalar to’planmaydi
                </p>
                <img src="/src/assets/tex2.png" alt="" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
