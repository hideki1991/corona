import React from 'react'
import FilterWithID from '../containers/FilterWithID'
import ListGroup from "react-bootstrap/cjs/ListGroup";


const countries=['Afghanistan/アフガニスタン','Albania/アルバニア', 'Algeria/アルジェリア', 'Andorra/アンドラ' ,'Angola/アンドラ',
    'Antigua and Barbuda/アンティグア・バーブーダ', 'Argentina/アルゼンチン', 'Armenia/アルメニア' ,'Australia/オーストラリア', 'Austria/オーストリア',
    'Azerbaijan/アゼルバイジャン', 'Bahamas/バハマ' ,'Bahrain/バーレーン' ,'Bangladesh/バングラデシュ' ,'Barbados/バルバドス', 'Belarus/ベラルーシ',
    'Belgium/ベルギー', 'Belize/ベリーズ', 'Benin/ベニン', 'Bhutan/ブータン' ,'Bolivia/ボリビア', 'Bosnia and Herzegovina/ボスニア・ヘルツェゴビナ',
    'Botswana/ボツワナ', 'Brazil/ブラジル' ,'Brunei/ブルネイ' ,'Bulgaria/ブルガリア', 'Burkina Faso/ブルキナファソ' ,'Burma/ミャンマー', 'Burundi/ブルンジ',
    'Cabo Verde/カーボベルデ', 'Cambodia/カンボジア', 'Cameroon/カメルーン' ,'Canada/カナダ', 'Central African Republic/中央アフリカ共和国',
    'Chad/チャド', 'Chile/チリ', 'China/中国', 'Colombia/コロンビア', 'Comolos/コモロ','Congo (Brazzaville)/コンゴ',
    'Congo (Kinshasa)/コンゴ' ,'Costa Rica/コスタリカ' ,"Cote d'Ivoire/コートジボアール" ,'Croatia/クロアチア' ,'Cuba/キューバ', 'Cyprus/キプロス',
    'Czechia/チェコ', 'Denmark/デンマーク' ,'Diamond Princess/ダイヤモンドプリンセス（客船）', 'Djibouti/ジブチ', 'Dominica/ドミニカ',
    'Dominican Republic/ドミニカ共和国' ,'Ecuador/エクアドル', 'Egypt/エジプト', 'El Salvador/エルサルバドル' ,'Equatorial Guinea/赤道ギニア',
    'Eritrea/エリトリア', 'Estonia/エストニア', 'Eswatini/エスワティニ', 'Ethiopia/エチオピア' ,'Fiji/フィジー' ,'Finland/フィンランド' ,'France/フランス',
    'Gabon/ガボン' ,'Gambia/ガンビア' ,'Georgia/ジョージア' ,'Germany/ドイツ', 'Ghana/ガーナ', 'Greece/ギリシャ' ,'Grenada/グレナダ',
    'Guatemala/グアテマラ', 'Guinea/ギニア', 'Guinea-Bissau/ギニアビサウ', 'Guyana/ガイアナ' ,'Haiti/ハイチ' ,'Holy See/バチカン',
    'Honduras/ホンジュラス', 'Hungary/ハンガリー', 'Iceland/アイスランド' ,'India/インド' ,'Indonesia/インドネシア', 'Iran/イラン', 'Iraq/イラク',
    'Ireland/アイルランド' ,'Israel/イスラエル' ,'Italy/イタリア', 'Jamaica/ジャマイカ' ,'Japan/日本', 'Jordan/ヨルダン', 'Kazakhstan/カザフスタン',
    'Kenya/ケニア' ,'Korea, South/韓国', 'Kosovo/コソボ', 'Kuwait/クウェート', 'Kyrgyzstan/キルギスタン' ,'Laos/ラオス人民民主共和国', 'Latvia/ラトビア',
    'Lebanon/レバノン', 'Liberia/リベリア', 'Libya/リビア', 'Liechtenstein/リヒテンシュタイン', 'Lithuania/リトアニア', 'Luxembourg/ルクセンブルク',
    'MS Zaandam/MSザーンダム（客船）' ,'Madagascar/マダガスカル', 'Malawi/マラウィ', 'Malaysia/マレーシア', 'Maldives/モルディブ' ,'Mali/マリ', 'Malta/マルタ',
    'Mauritania/モーリタニア', 'Mauritius/モーリシャス', 'Mexico/メキシコ', 'Moldova/モルドバ', 'Monaco/モナコ', 'Mongolia/モンゴル',
    'Montenegro/モンテネグロ', 'Morocco/モロッコ' ,'Mozambique/モザンビーク' ,'Namibia/ナミビア', 'Nepal/ネパール' ,'Netherlands/オランダ',
    'New Zealand/ニュージーランド' ,'Nicaragua/ニカラグア', 'Niger/ニジェール' ,'Nigeria/ナイジェリア' ,'North Macedonia/北マケドニア' ,'Norway/ノルウェー',
    'Oman/オマーン', 'Pakistan/パキスタン' ,'Panama/パナマ', 'Papua New Guinea/パプア・ニューギニア' ,'Paraguay/パラグアイ', 'Peru/ペルー',
    'Philippines/フィリピン', 'Poland/ポーランド' ,'Portugal/ポルトガル' ,'Qatar/カタール', 'Romania/ルーマニア', 'Russia/ロシア連邦' ,'Rwanda/ルワンダ',
    'Saint Kitts and Nevis/セントクリストファー・ネイビス' ,'Saint Lucia/セントルシア' ,'Saint Vincent and the Grenadines/セントビンセントおよびグレナディーン諸島',
    'San Marino/サンマリノ', 'Sao Tome and Principe/サントメ・プリンシペ', 'Saudi Arabia/サウジアラビア', 'Senegal/セネガル' ,'Serbia/セルビア',
    'Seychelles/セイシェル' ,'Sierra Leone/シエラレオネ', 'Singapore/シンガポール', 'Slovakia/スロバキア' ,'Slovenia/スロベニア', 'Somalia/ソマリア',
    'South Africa/南アフリカ' ,'South Sudan/南スーダン' ,'Spain/スペイン', 'Sri Lanka/スリランカ', 'Sudan/スーダン', 'Suriname/スリナム',
    'Sweden/スウェーデン', 'Switzerland/スイス', 'Syria/シリア', 'Taiwan*/台湾', 'Tajikistan/タジキスタン','Tanzania/タンザニア' ,'Thailand/タイ',
    'Timor-Leste/東ティモール', 'Togo/トーゴ' ,'Trinidad and Tobago/トリニダード・トバゴ' ,'Tunisia/チュニジア', 'Turkey/トルコ', 'US/アメリカ合衆国',
    'Uganda/ウガンダ', 'Ukraine/ウクライナ', 'United Arab Emirates/アラブ首長国連邦', 'United Kingdom/英国' ,'Uruguay/ウルグアイ',
    'Uzbekistan/ウズベキスタン', 'Venezuela/ベネズエラ', 'Vietnam/ベトナム', 'West Bank and Gaza/ヨルダン川西岸及びガザ地区', 'Western Sahara/西サハラ',
    'Yemen/イエメン', 'Zambia/ザンビア' ,'Zimbabwe/ジンバブエ','World/全世界合計']


const Filters = () => (
    <div>
        <ListGroup>
        {countries.map((value, index) => {
            return <FilterWithID countryID={index+1}>{value}</FilterWithID>
        })}
        </ListGroup>
    </div>
)

export default Filters