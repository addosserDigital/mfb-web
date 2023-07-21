import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  team: any[] = [];
  management: any;

  public teamSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public teamManagementSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor() {
    this.team = [
      {
        name: `Bayo Fabiyi`,
        role: `Managing Director`,
        img: `../../assets/img/team/BAYO-FABIYI_1.jpg`,
        details: `Mr. Adebayo Fabiyi is an accomplished professional in the financial industry, currently serving as the Managing Director at Addosser Microfinance Bank Ltd. With over two decades of experience in Banking Operations and Human Resource Management.
        <br>
        Having joined Addosser Microfinance Bank Ltd as one of its pioneer staff in 2008, Mr. Fabiyi quickly rose through the ranks. Initially responsible for managing the bank's operations, his outstanding performance led to his promotion as Executive Director and, subsequently, to his current position as Managing Director. His influential presence and dedication to success have solidified his reputation within the organization.
        <br>
        Prior to his tenure at Addosser, Mr. Fabiyi held key positions at renowned institutions such as Ecobank Nigeria Plc. and Intercontinental Bank Nigeria Plc. These experiences provided him with valuable insights and a comprehensive understanding of the banking landscape.
        <br>
        With a Bachelor's Degree in English Studies and an MBA in International Business, Mr. Fabiyi possesses a strong academic foundation that complements his strategic acumen. He is a member of the Chartered Institute of Bankers of Nigeria,
        <br>
        Known for his motivation and result-oriented approach, Mr. Fabiyi has achieved remarkable success in various managerial roles throughout his career. His exceptional performance and leadership have earned him recognition within the Nigerian Banking Sector. As an invaluable asset to Addosser, he exemplifies the qualities of a dynamic leader and is widely respected for his expertise and dedication to excellence.
        `,
      },
      {
        name: `Deji Adare`,
        role: `Executive Director, Finance`,
        img: `../../assets/img/team/ADARE-AYODEJI-OLANIYAN_2.jpg`,
        details: `Mr. Ayodeji, an esteemed professional played a crucial role in the establishment of Addosser Microfinance Bank Limited, where he currently serves as the Executive Director, Finance. His journey with the bank began as a pioneer staff, and he later advanced to the position of Chief Financial Officer, holding this role for over 8 years before emerging the Executive Director, Finance.
        <br>
        With a remarkable career spanning over twenty years in the banking industry, Mr. Ayodeji possesses extensive expertise in various areas, including Operations, Finance, Treasury and Investment Management, Internal Control, and Information Technology implementation. He has gained valuable experience and knowledge from his previous positions at Equity Bank Limited and Intercontinental Bank Limited.
        <br>
        Mr. Ayodeji's commitment to professional growth is evident through his membership in the Chartered Institute of Bankers of Nigeria (CIBN) and his certification as a Microfinance Banker. Additionally, he holds a Higher National Diploma in Accountancy and is recognized as a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN). His dedication to continuous learning is further demonstrated by his alumni status at the prestigious Lagos Business School.
        `,
      },
      {
        name: `Kemi Ampitan`,
        role: `-`,
        img: `../../assets/img/team/Kemi-Ampitan_2.jpg`,
        details: `Kemi Ampitan is a Chartered accountant with over (20) twenty years' experience spanning across Audit, Manufacturing, Stock Broking, Accounting, Banking, and Risk Management.
        <br>
        She is a member of Institute of Chartered Accountants of Nigeria, member of Chartered Institute of Taxation of Nigeria, member Institute of Chartered Management Accountants of Nigeria, also a member of Chartered Institute of Bankers of Nigeria and a certified Risk Expert from Frankfurt School of Finance and Management – Germany. 
        <br>
        Prior joining Addosser, Mrs. Ampitan worked as a Chief Risk Officer, Chief Financial Officer, Head – Administration Department, Head of Internal Audit and member of Management Board of AB Microfinance Bank Nigeria, a foreign owned national microfinance bank.  She was also the Head of Internal Audit & Control office at Citigate Microfinance Bank, Head Finance and Admin at Moving Media & M.M Digital Ltd, Audit Supervisor at Ademola Oyinbo & Co (Chartered Accountants), and Assistant Manager Accounts at Prudential Securities Ltd.
        <br>
        Kemi Ampitan also has International experience, exposure and working relationship with colleagues within Africa, Asia and Europe, thorough understanding of Operational and Financial risk, sound knowledge of Financial Analysis & Financial Planning, Treasury Management, Fund Raising (debt & equity), Taxation, Accounting, General Ledger Management, Strategic Planning, Corporate Governance and Budgeting. She has attended various trainings and workshops within and outside Nigeria.
        `,
      },
      {
        name: `Godwin Ogeh`,
        role: `-`,
        img: `../../assets/img/team/GODWIN-OGEHH.jpg`,
        details: `Mr. Godwin O. Ogeh, a distinguished professional with an extensive background in finance and accounting. Graduating in 1985, he became a Chartered Accountant in 1998 and has amassed over thirty years of experience in both professional practice and various industries. Throughout his career, Mr. Ogeh has held numerous senior management roles within different organizations, accumulating an impressive twenty-five years in such positions.
        <br>
        Continuously striving for professional growth, he has actively pursued continuous learning opportunities by participating in various courses and workshops, both domestically and internationally. Notably, he played a pivotal role in the management of a $36 million US-EXIM bank facility dedicated to acquiring marine equipment in Nigeria.
        <br>
        Mr. Ogeh's expertise encompasses a wide range of banking experiences, having worked with prestigious institutions such as AFRIEXIM Bank, NEXIM Bank, Eco Bank, and First Bank Nigeria Limited. Within these roles, he successfully processed and obtained credit facilities to facilitate equipment financing.
        <br>
        Presently, Mr. Ogeh serves as the Managing Partner of Ben Omomia & Co, a renowned firm of Chartered Accountants. The firm specializes in delivering exceptional Accounting, Auditing, and Financial Services to both the Government and private sector.
        <br>
        Furthermore, Mr. Ogeh holds a significant role as a Non-Executive Director at Addosser Microfinance Bank Limited, contributing his valuable insights to the organization's strategic decisions.
        <br>
        Overall, Mr. Godwin O. Ogeh's notable achievements, extensive experience, and commitment to professional excellence make him a highly respected and accomplished figure within the finance and accounting field
        `,
      },
      {
        name: `Emmanuella George-Uduku`,
        role: `Independent Non-Executive Director`,
        img: `../../assets/img/team/no-image_1.png`,
        details: `Mrs. Emmanuella Goerge Uduku is an MBA alumnus of the prestigious International Business School – Hult International Business School with over 14 years of experience in Banking/Finance and Management Consulting both in Nigeria and the USA. She is currently an Independent Non-Executive Director at Addosser Microfinance Bank.
        <br>
        She has over the years demonstrated results in business development, entrepreneurship strategy, and strategic planning. She is keen on helping entrepreneurs and SMEs improve on their performance and build sustainable businesses that will outlive the founders.
        <br>
        She is also the Managing Partner of HillBridge Consulting and a Certified Management Consultant who specializes in strategic planning for SME business growth.
        <br>
        Mrs. Emmanuella holds a BSc. in Management Information System from Covenant University (2006) and is a fellow of the Institute of Management Consultants Nigeria.
        
        `,
      },
    ];
    this.management = [
      {
        name: `Lookman Agbetoba`,
        role: `Group Head, SME Banking`,
        img: `../../assets/img/team/LOOKMAN-AGBETOBA_1.jpg`,
        details: `Lookman Agbetoba is an esteemed professional currently serving as the Head of the SME Group. With an impressive career spanning across various roles within the bank.
        <br>
        Lookman began his career journey in the bank as an auditor. His exceptional performance in the institution led him to take on the significant responsibility of being the Strategy Officer for the bank.
        <br>
        Prior to joining the bank, Lookman gained valuable experience as an audit trainee at UAC, where he quickly rose through the ranks to become the Performance and Change Manager.
        <br>
        Education-wise, Lookman holds a BSc and MSc in Agronomy from the esteemed University of Ibadan. He further expanded his knowledge by earning an additional MSc degree in Industrial & Labour Relations from the University of Lagos, showcasing his commitment to continuous learning and personal growth.
        <br>
        He is a member of the chartered Institute of Bankers of Nigeria and also a certified microfinance banker.
        `,
      },
      {
        name: `Emmanuel Mejedi`,
        role: `Group Head, Retail Banking and Savings`,
        img: `../../assets/img/team/EMMANUEL-MEJEDI_2.jpg`,
        details: `Emmanuel is a member of the prestigious Chartered Institute of Bankers of Nigeria and holds a certification as a Microfinance Banker (MCIB), he has been a microfinance banker over the course of more than 10 years.
        <br>
        A graduate of geography from University of Ilorin where he holds a Bachelor degree.
        <br>
        Before joining Addosser Microfinance Bank, he was a Relationship Officer at FirstCall Group (Savings and Loans). In 2009, he joined Addosser Microfinance Bank, commencing his journey as a Relationship Officer. Through dedication, determination, and consistent exceptional performance, he swiftly climbed the corporate ladder, ultimately assuming the position of Head of Retail & Micro Enterprises Group in February 2018.
        <br>
        His commitment and dedication have earned him numerous accolades, including multiple recognitions as the outstanding staff of the year
        `,
      },
      {
        name: `Onomarho Ogugua`,
        role: `Head, Internal Audit`,
        img: `../../assets/img/team/OGUGHA-ONOMARHO-MALONE_2.jpg`,
        details: `Over the years, Mr Ogugua have honed his expertise in tax audit, forensic audit, and investigation in banking.
        <br>
        Prior to joining Addosser Microfinance Bank, he successfully contributed to the growth and success of institutions such as Tosin Fadare & Co, (Chartered Accountants) and Integrated MFB.
        <br>
        Mr Ogugha holds a B.SC in Accounting from the prestigious Delta State University, Abraka.
        <br>
        He began his journey at Addosser Microfinance Bank as an audit supervisor before assuming his current position. As an associate member of the Institute of Chartered Accountants of Nigeria (ICAN) and chartered Institute of Bankers of Nigeria, he upholds the highest professional standards in his work.
        `,
      },
      {
        name: `Bukola Adebisi`,
        role: `Head, Credit Risk Management`,
        img: `../../assets/img/team/Bowofola-Bukola_2.jpg`,
        details: `Mr Adebisi holds a B.Sc. and M.Sc. in Statistics from the University of Ilorin. He has over 10 years working experience both in Investment and Credit Risk Management that spans institutions such as AIMS Assets Management Ltd. He worked as a senior Credit Risk Officer in Addosser MFB for over 7 years before assuming his current position as the Head of Credit Risk department.
        <br>
        In addition, he is a member of the Chartered Institute of Bankers of Nigeria.
        `,
      },
      {
        name: `Omolara Iliya`,
        role: `Head, Quality Assurance and Compliance`,
        img: `../../assets/img/team/ILIYA-OMOLARA-CLARA_1.jpg`,
        details: `Omolara is a highly accomplished professional with an exceptional background and an extensive range of skills and experience. She holds a Higher National Diploma in Accounting.
        <br>
        With over 13 years of industry experience, Omolara has demonstrated her expertise in various areas, including Marketing, Customer Service, Banking Operations, and Credit and Risk Management. Her career journey includes successful tenures at renowned companies such as Clique Nigeria and United Bank for Africa (UBA), where she consistently delivered exceptional results.
        <br>
        In 2008, Omolara joined Addosser Microfinance Bank as one of its pioneer staff members. Since then, she has held several key positions within the organization, showcasing her versatility and dedication. Her roles have included Head of Customer Service Unit, Head of Banking Operations, Credit Analyst, Head of Credit Administration Unit, and Head of Credit and Risk Management Department. Her exceptional performance in these roles led her to her current position as the Head of the Quality Assurance Department of the bank.
        <br>
        She is a member of the Charted Institute of Bankers of Nigeria (CIBN), Certified Microfinance banker (MCIB) and also a fellow of Association of National Accountant of Nigeria."
        `,
      },
      {
        name: `Modupe Dairo`,
        role: `Head, Banking Operations`,
        img: `../../assets/img/team/MODUPE-DAIRO_1.jpg`,
        details: `Modupe is a highly accomplished professional with a strong educational background and a wealth of experience in the finance industry.
        <br>
        She holds a Higher National Diploma (HND) in Science Laboratory Technology with a focus on Chemistry from the Federal Polytechnic Ilaro in Ogun State and a Master of Business Administration (MBA) degree with a specialization in General Management from Ajayi Crowther University.
        <br>
        She’s currently pursuing a Doctor of Business Administration (DBA) degree at Ajayi Crowther University in Oyo State.
        <br>
        Prior to joining Addosser Microfinance Bank, Modupe worked in Safetrust Mortgage Bank Ltd, where she held various positions of increasing responsibility.
        <br>
        Modupe is a member of Associate Nigerian Institute of Public Relations (ANIPR) and Member Chartered Institute of Administration (MCIA)
        `,
      },
      {
        name: `Deborah Maduako`,
        role: `Head, ERM`,
        img: `../../assets/img/team/DEBORAH-MADUAKO_1.jpg`,
        details: `Deborah is the Head of Enterprise Risk Management at the Bank. She ensures the establishment of a risk management framework that is compliant with regulatory standards and develops policies and procedures to effectively identify, assess, monitor, and mitigate risk in the Bank.
        <br>
        She holds an M.sc in Finance from the University of Lagos and also a B.sc in Accounting from Abia State University Uturu. With over 14 years of experience, she has worked with institutions such as Bank PHB, Parker Randall Offor, App Zone Ltd, and Accion MFB before Joining Addosser MFB. She has served in several capacities ranging from Marketing, Internal Control, System administration and Enterprise Risk Management.
        <br>
        She is an Associate member of the Institute of Chartered Accountants of Nigeria.        
        `,
      },
      {
        name: `Chijioke Obiangwu`,
        role: `Head, Specialized Products and Partnerships`,
        img: `../../assets/img/team/CHIJIOKE-OBIAGWU_1.jpg`,
        details: `-`,
      },
      {
        name: `Olawale Olatunji`,
        role: `Chief Operating Officer`,
        img: `../../assets/img/team/OLAWALE-OLATUNJII_1.jpg`,
        details: `-`,
      },
    ];
  }

  getTeam() {
    this.teamSubject.next(this.team);
  }

  getTeamManagement() {
    this.teamManagementSubject.next(this.management);
  }
}
