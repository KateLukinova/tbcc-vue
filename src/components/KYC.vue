<template>
  <section class="kyc-section">
    <div class="header">
      <h2>Welcom, {{userName}}</h2>
      <langSelect class="mobile-none"></langSelect>
    </div>
    <div class="form-kyc">
      <form action="#" method="post">

        <div v-show="step === 1" class="form-wrap">

          <div class="form-progress">
            Step 1 of 4
            <span class="progress-line step-one"></span>
          </div>

          <div class="place form">
            <div class="form-caption">Personal Information</div>
            <div class="form-row">
              <div class="input-box">
                <input type="text" placeholder="First Name (English)">
              </div>
              <div class="input-box">
                <input type="text" placeholder="Last Name (English)">
              </div>
            </div>
            <div class="form-row">
              <div class="input-box">
                <input type="text" placeholder="Middle Name (English)">
              </div>
              <div class="input-box">
                <input type="text" placeholder="Foreign Name (native language)*">
              </div>
            </div>
            <div class="form-row">
              <div class="input-box">
                <datepicker placeholder="Date of Birth*" class="date-input"></datepicker>
              </div>
              <div class="input-box">
                <select name="select">
                  <option value=""  disabled selected style='display:none'>Gender</option>
                  <option value="value1">Male</option>
                  <option value="value2">Female</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="input-box">
                <select name="nationality">
                  <option value="" disabled selected style='display:none'>Nationality</option>
                  <option value="afghan">Afghan</option>
                  <option value="albanian">Albanian</option>
                  <option value="algerian">Algerian</option>
                  <option value="american">American</option>
                  <option value="andorran">Andorran</option>
                  <option value="angolan">Angolan</option>
                  <option value="antiguans">Antiguans</option>
                  <option value="argentinean">Argentinean</option>
                  <option value="armenian">Armenian</option>
                  <option value="australian">Australian</option>
                  <option value="austrian">Austrian</option>
                  <option value="azerbaijani">Azerbaijani</option>
                  <option value="bahamian">Bahamian</option>
                  <option value="bahraini">Bahraini</option>
                  <option value="bangladeshi">Bangladeshi</option>
                  <option value="barbadian">Barbadian</option>
                  <option value="barbudans">Barbudans</option>
                  <option value="batswana">Batswana</option>
                  <option value="belarusian">Belarusian</option>
                  <option value="belgian">Belgian</option>
                  <option value="belizean">Belizean</option>
                  <option value="beninese">Beninese</option>
                  <option value="bhutanese">Bhutanese</option>
                  <option value="bolivian">Bolivian</option>
                  <option value="bosnian">Bosnian</option>
                  <option value="brazilian">Brazilian</option>
                  <option value="british">British</option>
                  <option value="bruneian">Bruneian</option>
                  <option value="bulgarian">Bulgarian</option>
                  <option value="burkinabe">Burkinabe</option>
                  <option value="burmese">Burmese</option>
                  <option value="burundian">Burundian</option>
                  <option value="cambodian">Cambodian</option>
                  <option value="cameroonian">Cameroonian</option>
                  <option value="canadian">Canadian</option>
                  <option value="cape verdean">Cape Verdean</option>
                  <option value="central african">Central African</option>
                  <option value="chadian">Chadian</option>
                  <option value="chilean">Chilean</option>
                  <option value="chinese">Chinese</option>
                  <option value="colombian">Colombian</option>
                  <option value="comoran">Comoran</option>
                  <option value="congolese">Congolese</option>
                  <option value="costa rican">Costa Rican</option>
                  <option value="croatian">Croatian</option>
                  <option value="cuban">Cuban</option>
                  <option value="cypriot">Cypriot</option>
                  <option value="czech">Czech</option>
                  <option value="danish">Danish</option>
                  <option value="djibouti">Djibouti</option>
                  <option value="dominican">Dominican</option>
                  <option value="dutch">Dutch</option>
                  <option value="east timorese">East Timorese</option>
                  <option value="ecuadorean">Ecuadorean</option>
                  <option value="egyptian">Egyptian</option>
                  <option value="emirian">Emirian</option>
                  <option value="equatorial guinean">Equatorial Guinean</option>
                  <option value="eritrean">Eritrean</option>
                  <option value="estonian">Estonian</option>
                  <option value="ethiopian">Ethiopian</option>
                  <option value="fijian">Fijian</option>
                  <option value="filipino">Filipino</option>
                  <option value="finnish">Finnish</option>
                  <option value="french">French</option>
                  <option value="gabonese">Gabonese</option>
                  <option value="gambian">Gambian</option>
                  <option value="georgian">Georgian</option>
                  <option value="german">German</option>
                  <option value="ghanaian">Ghanaian</option>
                  <option value="greek">Greek</option>
                  <option value="grenadian">Grenadian</option>
                  <option value="guatemalan">Guatemalan</option>
                  <option value="guinea-bissauan">Guinea-Bissauan</option>
                  <option value="guinean">Guinean</option>
                  <option value="guyanese">Guyanese</option>
                  <option value="haitian">Haitian</option>
                  <option value="herzegovinian">Herzegovinian</option>
                  <option value="honduran">Honduran</option>
                  <option value="hungarian">Hungarian</option>
                  <option value="icelander">Icelander</option>
                  <option value="indian">Indian</option>
                  <option value="indonesian">Indonesian</option>
                  <option value="iranian">Iranian</option>
                  <option value="iraqi">Iraqi</option>
                  <option value="irish">Irish</option>
                  <option value="israeli">Israeli</option>
                  <option value="italian">Italian</option>
                  <option value="ivorian">Ivorian</option>
                  <option value="jamaican">Jamaican</option>
                  <option value="japanese">Japanese</option>
                  <option value="jordanian">Jordanian</option>
                  <option value="kazakhstani">Kazakhstani</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="kittian and nevisian">Kittian and Nevisian</option>
                  <option value="kuwaiti">Kuwaiti</option>
                  <option value="kyrgyz">Kyrgyz</option>
                  <option value="laotian">Laotian</option>
                  <option value="latvian">Latvian</option>
                  <option value="lebanese">Lebanese</option>
                  <option value="liberian">Liberian</option>
                  <option value="libyan">Libyan</option>
                  <option value="liechtensteiner">Liechtensteiner</option>
                  <option value="lithuanian">Lithuanian</option>
                  <option value="luxembourger">Luxembourger</option>
                  <option value="macedonian">Macedonian</option>
                  <option value="malagasy">Malagasy</option>
                  <option value="malawian">Malawian</option>
                  <option value="malaysian">Malaysian</option>
                  <option value="maldivan">Maldivan</option>
                  <option value="malian">Malian</option>
                  <option value="maltese">Maltese</option>
                  <option value="marshallese">Marshallese</option>
                  <option value="mauritanian">Mauritanian</option>
                  <option value="mauritian">Mauritian</option>
                  <option value="mexican">Mexican</option>
                  <option value="micronesian">Micronesian</option>
                  <option value="moldovan">Moldovan</option>
                  <option value="monacan">Monacan</option>
                  <option value="mongolian">Mongolian</option>
                  <option value="moroccan">Moroccan</option>
                  <option value="mosotho">Mosotho</option>
                  <option value="motswana">Motswana</option>
                  <option value="mozambican">Mozambican</option>
                  <option value="namibian">Namibian</option>
                  <option value="nauruan">Nauruan</option>
                  <option value="nepalese">Nepalese</option>
                  <option value="new zealander">New Zealander</option>
                  <option value="ni-vanuatu">Ni-Vanuatu</option>
                  <option value="nicaraguan">Nicaraguan</option>
                  <option value="nigerien">Nigerien</option>
                  <option value="north korean">North Korean</option>
                  <option value="northern irish">Northern Irish</option>
                  <option value="norwegian">Norwegian</option>
                  <option value="omani">Omani</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="palauan">Palauan</option>
                  <option value="panamanian">Panamanian</option>
                  <option value="papua new guinean">Papua New Guinean</option>
                  <option value="paraguayan">Paraguayan</option>
                  <option value="peruvian">Peruvian</option>
                  <option value="polish">Polish</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="qatari">Qatari</option>
                  <option value="romanian">Romanian</option>
                  <option value="russian">Russian</option>
                  <option value="rwandan">Rwandan</option>
                  <option value="saint lucian">Saint Lucian</option>
                  <option value="salvadoran">Salvadoran</option>
                  <option value="samoan">Samoan</option>
                  <option value="san marinese">San Marinese</option>
                  <option value="sao tomean">Sao Tomean</option>
                  <option value="saudi">Saudi</option>
                  <option value="scottish">Scottish</option>
                  <option value="senegalese">Senegalese</option>
                  <option value="serbian">Serbian</option>
                  <option value="seychellois">Seychellois</option>
                  <option value="sierra leonean">Sierra Leonean</option>
                  <option value="singaporean">Singaporean</option>
                  <option value="slovakian">Slovakian</option>
                  <option value="slovenian">Slovenian</option>
                  <option value="solomon islander">Solomon Islander</option>
                  <option value="somali">Somali</option>
                  <option value="south african">South African</option>
                  <option value="south korean">South Korean</option>
                  <option value="spanish">Spanish</option>
                  <option value="sri lankan">Sri Lankan</option>
                  <option value="sudanese">Sudanese</option>
                  <option value="surinamer">Surinamer</option>
                  <option value="swazi">Swazi</option>
                  <option value="swedish">Swedish</option>
                  <option value="swiss">Swiss</option>
                  <option value="syrian">Syrian</option>
                  <option value="taiwanese">Taiwanese</option>
                  <option value="tajik">Tajik</option>
                  <option value="tanzanian">Tanzanian</option>
                  <option value="thai">Thai</option>
                  <option value="togolese">Togolese</option>
                  <option value="tongan">Tongan</option>
                  <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                  <option value="tunisian">Tunisian</option>
                  <option value="turkish">Turkish</option>
                  <option value="tuvaluan">Tuvaluan</option>
                  <option value="ugandan">Ugandan</option>
                  <option value="ukrainian">Ukrainian</option>
                  <option value="uruguayan">Uruguayan</option>
                  <option value="uzbekistani">Uzbekistani</option>
                  <option value="venezuelan">Venezuelan</option>
                  <option value="vietnamese">Vietnamese</option>
                  <option value="welsh">Welsh</option>
                  <option value="yemenite">Yemenite</option>
                  <option value="zambian">Zambian</option>
                  <option value="zimbabwean">Zimbabwean</option>
                </select>
              </div>
              <div class="input-box">
                <select name="occupation">
                  <option value="" disabled selected style='display:none'>Occupations</option>
                  <optgroup label="Healthcare Practitioners and Technical Occupations:">
                    <option value="1">-  Chiropractor</option>
                    <option value="2">-  Dentist</option>
                    <option value="3">-  Dietitian or Nutritionist</option>
                    <option value="4">-  Optometrist</option>
                    <option value="5">-  Pharmacist</option>
                    <option value="6">-  Physician</option>
                    <option value="7">-  Physician Assistant</option>
                    <option value="8">-  Podiatrist</option>
                    <option value="9">-  Registered Nurse</option>
                    <option value="10">-  Therapist</option>
                    <option value="11">-  Veterinarian</option>
                    <option value="12">-  Health Technologist or Technician</option>
                    <option value="13">-  Other Healthcare Practitioners and Technical Occupation</option>
                  </optgroup>
                  <optgroup label="Healthcare Support Occupations:">
                    <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
                    <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
                    <option value="16">-  Other Healthcare Support Occupation</option>
                  </optgroup>
                  <optgroup label="Business, Executive, Management, and Financial Occupations:">
                    <option value="17">-  Chief Executive</option>
                    <option value="18">-  General and Operations Manager</option>
                    <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                    <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
                    <option value="21">-  Construction Manager</option>
                    <option value="22">-  Engineering Manager</option>
                    <option value="23">-  Accountant, Auditor</option>
                    <option value="24">-  Business Operations or Financial Specialist</option>
                    <option value="25">-  Business Owner</option>
                    <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
                  </optgroup>
                  <optgroup label="Architecture and Engineering Occupations:">
                    <option value="27">-  Architect, Surveyor, or Cartographer</option>
                    <option value="28">-  Engineer</option>
                    <option value="29">-  Other Architecture and Engineering Occupation</option>
                  </optgroup>
                  <optgroup label="Education, Training, and Library Occupations:">
                    <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
                    <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
                    <option value="32">-  Other Teacher or Instructor</option>
                    <option value="33">-  Other Education, Training, and Library Occupation</option>
                  </optgroup>
                  <optgroup label="Other Professional Occupations:">
                    <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
                    <option value="35">-  Computer Specialist, Mathematical Science</option>
                    <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                    <option value="37">-  Lawyer, Judge</option>
                    <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                    <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                    <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                    <option value="41">-  Social Scientist and Related Worker</option>
                    <option value="42">-  Other Professional Occupation</option>
                  </optgroup>
                  <optgroup label="Office and Administrative Support Occupations:">
                    <option value="43">-  Supervisor of Administrative Support Workers</option>
                    <option value="44">-  Financial Clerk</option>
                    <option value="45">-  Secretary or Administrative Assistant</option>
                    <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
                    <option value="47">-  Other Office and Administrative Support Occupation</option>
                  </optgroup>
                  <optgroup label="Services Occupations:">
                    <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                    <option value="49">-  Chef or Head Cook</option>
                    <option value="50">-  Cook or Food Preparation Worker</option>
                    <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                    <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
                    <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                    <option value="54">-  Sales Supervisor, Retail Sales</option>
                    <option value="55">-  Retail Sales Worker</option>
                    <option value="56">-  Insurance Sales Agent</option>
                    <option value="57">-  Sales Representative</option>
                    <option value="58">-  Real Estate Sales Agent</option>
                    <option value="59">-  Other Services Occupation</option>
                  </optgroup>
                  <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                    <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                    <option value="61">-  Farming, Fishing, and Forestry</option>
                    <option value="62">-  Installation, Maintenance, and Repair</option>
                    <option value="63">-  Production Occupations</option>
                    <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                  </optgroup>
                  <optgroup label="Transportation Occupations:">
                    <option value="65">-  Aircraft Pilot or Flight Engineer</option>
                    <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                    <option value="67">-  Other Transportation Occupation</option>
                  </optgroup>
                  <optgroup label="Other Occupations:">
                    <option value="68">-  Military</option>
                    <option value="69">-  Homemaker</option>
                    <option value="70">-  Other Occupation</option>
                    <option value="71">-  Don't Know</option>
                    <option value="72">-  Not Applicable</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>

          <button @click.prevent="next()" class="button-primary">Далее</button>

        </div>

        <div v-show="step === 2" class="form-wrap">

          <div class="form-progress">
            Step 2 of 4
            <span class="progress-line step-two"></span>
            <button @click.prevent="prev()" class="form-back">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="#28AA9A" stroke-width="2"/>
              </svg>
              back
            </button>
          </div>

          <div class="place form">
            <div class="form-caption">Address Information</div>
            <div class="form-row">
              <div class="input-box">
                <input type="text" placeholder="Address">
              </div>
              <div class="input-box">
                <select name="country">
                  <option value="" disabled selected style='display:none'>Country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">French Southern Territories</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-bissau">Guinea-bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                  <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                  <option value="Moldova, Republic of">Moldova, Republic of</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">Netherlands Antilles</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                  <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                  <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-leste">Timor-leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">Virgin Islands, British</option>
                  <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="input-box">
                <input type="text" placeholder="City">
              </div>
              <div class="input-box">
                <input type="text" placeholder="Postal Code">
              </div>
            </div>
          </div>

          <button @click.prevent="next()" class="button-primary">Далее</button>

        </div>

        <div v-show="step === 3" class="form-wrap">

          <div class="form-progress">
            Step 3 of 4
            <span class="progress-line step-three"></span>
            <button @click.prevent="prev()" class="form-back">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="#28AA9A" stroke-width="2"/>
              </svg>
              back
            </button>
          </div>

          <div class="place form">
            <div class="form-row">
              <div class="form-column">
                <div class="form-caption">ID Document / Passport</div>
                <div class="input-box">
                  <select name="document-passport">
                    <option value="" disabled selected style='display:none'>Document Type</option>
                    <option value="Document1">Document1</option>
                    <option value="Document2">Document2</option>
                    <option value="Document3">Document3</option>
                  </select>
                </div>
                <div class="input-box">
                  <input type="number" placeholder="Document Number">
                </div>
                <div class="input-box">
                  <div class="file-input">
                    <label for="file1">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10.25L15 5.25H11.25V0.25H8.75V5.25H5L10 10.25ZM14.545 8.205L13.1438 9.60625L18.2238 11.5L10 14.5662L1.77625 11.5L6.85625 9.60625L5.455 8.205L0 10.25V15.25L10 19L20 15.25V10.25L14.545 8.205Z" fill="#28AA9A"/>
                      </svg>
                      Image File
                    </label>
                    <input type="file" id="file1">
                  </div>
                </div>
              </div>
              <div class="form-column">
                <div class="form-caption">ID Document Back Side</div>
                <div class="input-box">
                  <select name="document-passport">
                    <option value="" disabled selected style='display:none'>Document Type</option>
                    <option value="Document1">Document1</option>
                    <option value="Document2">Document2</option>
                    <option value="Document3">Document3</option>
                  </select>
                </div>
                <div class="input-box">
                  <input type="number" placeholder="Document Number">
                </div>
                <div class="input-box">
                  <div class="file-input">
                    <label for="file2">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10.25L15 5.25H11.25V0.25H8.75V5.25H5L10 10.25ZM14.545 8.205L13.1438 9.60625L18.2238 11.5L10 14.5662L1.77625 11.5L6.85625 9.60625L5.455 8.205L0 10.25V15.25L10 19L20 15.25V10.25L14.545 8.205Z" fill="#28AA9A"/>
                      </svg>
                      Image File
                    </label>
                    <input type="file" id="file2">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click.prevent="next()" class="button-primary">Далее</button>

        </div>

        <div v-show="step === 4" class="form-wrap">

          <div class="form-progress">
            Step 4 of 4
            <span class="progress-line step-four"></span>
            <button @click.prevent="prev()" class="form-back">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="#28AA9A" stroke-width="2"/>
              </svg>
              back
            </button>
          </div>

          <div class="place form">
            <div class="form-caption">Assign Card</div>
            <div class="form-row">
              <div class="input-box">
                <input type="text" v-mask="'####-####-####-####'" v-model="myInputModel" placeholder="- - - -   - - - -   - - - -   - - - -">
              </div>
            </div>
            <div class="form-caption">Contacts</div>
            <div class="form-row">
              <div class="input-box">
                <input type="email" placeholder="Email">
              </div>
              <div class="input-box number-phone">
                <select name="select-code-phone" class="select-code-phone">
                  <option value="+1">+1</option>
                  <option value="+2">+2</option>
                  <option value="+3">+3</option>
                  <option value="+4">+4</option>
                  <option value="+5">+5</option>
                  <option value="+6">+6</option>
                  <option value="+7" selected>+7</option>
                  <option value="+8">+8</option>
                  <option value="+9">+9</option>
                </select>
                <input type="text" v-mask="numberPhone" v-model="myInputModel2" placeholder="Cell Number">
              </div>
            </div>
          </div>

          <button @click.prevent="next()" class="button-primary">Далее</button>

        </div>
      </form>
    </div>

    <div class="text-center" v-if="kycModerate">
      <h3>Ваше KYC на модерации</h3>
      <p>После одобрения данных вы получите полный доступ к системе.</p>
    </div>

    <div class="text-center" v-else-if="kycError">
      <h3 class="error">Ваше KYC требует внимания</h3>
      <p>При проверке KYC были найдены ошибки. Исправьте их и отправьте данные на проверку повторно.</p>
      <router-link to="/kyc" class="button-primary">Исправить</router-link>
    </div>

    <div class="text-center" v-else-if="kycFinish">
      <h3 class="check">KYC пройдено!</h3>
      <p>Поздравляем! Теперь вы можете пользоваться всеми функциями системы.</p>
      <router-link to="/kyc" class="button-primary">Начать</router-link>
    </div>

    <div class="attention">
      <div class="caption">
        All applications are processed in work time from 8:00 to 17:00 UTC+8
      </div>
      <p>
        Please use ID (Document Type) only if you a Chinese or Hong-Kong Citizen. Citizens of all other countries must use their international passport to complete the KYC procedure.
      </p>
      <p>
        We are very sorry but those countries passports can not be accepted for KYC procedure - Cuba, Iran, North Korea, Sudan, Syria, Iraq, Liberia, Zimbabwe, Crimea.
      </p>
    </div>
  </section>
</template>

<script>

  import Datepicker from 'vuejs-datepicker';
  import { VueMaskDirective } from 'v-mask'
  Vue.directive('mask', VueMaskDirective);
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      userName: "Андрей",
      kycModerate: false,
      kycError: false,
      kycFinish: false,
      step:1,
      myInputModel: '',
      myInputModel2: '',
      numberPhone: '(###) ###-####',
      registration:{
        name:null,
        email:null,
        street:null,
        city:null,
        state:null,
        numtickets:0,
        shirtsize:'XL'
      }
    }
  },
  methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
    h3 {
      font-family: 'Montserrat-Bold', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      display: flex;
      align-items: center;
      color: #102724;
      &.error {
        color: #FC1A50;
      }
      &.check {
        color: #3FD045;
      }
    }
    p {
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #102724;
      max-width: 470px;
      margin: 30px 0;
      margin-bottom: 40px;

    }
  }
  .form-progress {
    font-family: 'Montserrat-Regular', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    color: #00312B;
    flex-direction: column;
    position: relative;
    .form-back {
      position: absolute;
      right: 0;
      top: 15px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-family: 'Montserrat-Regular', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #28AA9A;
      background-color: transparent;
      svg {
        margin-right: 5px;
      }
    }
    .progress-line {
      width: 100%;
      height: 4px;
      margin-top: 30px;
      margin-bottom: 70px;
      background-color: #F4F4F4;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #3FD045;
        z-index: 5;
      }
      &.step-one:after {
        width: 25%;
      }
      &.step-two:after {
        width: 50%;
      }
      &.step-three:after {
        width: 75%;
      }
      &.step-four:after {
        width: 100%;
      }
    }
  }
  .place {
    &.form {
      padding: 80px 120px;
      display: flex;
      flex-direction: column;
      .form-caption {
        font-family: 'Montserrat-Regular', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #102724;
        margin: 40px 0;
      }
      .form-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .input-box {
          width: 47%;
          input, .date-input, select, .file-input {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #006B5E;
            box-sizing: border-box;
            border-radius: 4px;
            font-family: 'Montserrat-Regular', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: rgba(0, 107, 94, 0.7);
            padding: 20px 30px;
            &::placeholder {
              color: rgba(0, 107, 94, 0.7);
            }
          }
          input[type=file] {
            display: none!important;
          }
          .file-input {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F8FFFE;
            border: 1px dashed #006B5E;
            box-sizing: border-box;
            border-radius: 10px;
            cursor: pointer;
          }
          &.number-phone {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .select-code-phone {
              width: 27%;
              padding: 20px 10px;
            }
            input {
              width: 70%;
            }
          }
        }
      }
      .form-column {
        display: flex;
        flex-direction: column;
        width: 47%;
        .input-box {
          width: 100%;
          margin-bottom: 40px;
        }
      }
    }
  }
  .date-input {
    position: relative;
    &::after {
      content: url("../assets/img/calendar.png");
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .vdp-datepicker__calendar header {
    position: static!important;
  }
  .form-wrap {
    display: flex;
    flex-direction: column;
  }
  .button-primary {
    align-self: flex-end;
    margin-bottom: 70px;
  }
  @media (max-width: 990px) {
    .text-center {
      margin-top: 100px;
    }
    .place.form {
      padding: 20px;
      .form-row {
        flex-direction: column;
        margin-bottom: 0;
        .input-box {
          width: 100%;
          margin-bottom: 15px;
        }
        .form-column {
          width: 100%;
        }
      }
    }
  }
</style>
