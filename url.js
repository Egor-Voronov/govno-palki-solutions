const currentURL = 'https://zavodteplic.ru/krs/greenhouse/osnova?width=2,5&interval=650&yclid=148300518264202252&utm_source=yandex&utm_campaign=82274548'
const parsedCurrentURL = new URL(currentURL)
let utmCampaign

if (parsedCurrentURL.search) {
  utmCampaign = parsedCurrentURL.searchParams.get('utm_campaign')

  console.log('пользователь пришел из рекламы яндекса.\n',`номер рекламной компании - ${utmCampaign ?? 'не определена'}`)
}