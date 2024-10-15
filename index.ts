import * as QRCode from 'qrcode';

// URL 배열
const urls: string[] = [
  'https://example.com/1',
  'https://example.com/2',
  'https://example.com/3'
];

// QR 코드를 이미지 파일로 생성하는 함수
async function generateQRCode(url: string, index: number): Promise<void> {
  try {
    const fileName = `qrcode-${index}.png`;
    // QR 코드를 PNG 이미지 파일로 변환
    await QRCode.toFile('images/'+fileName, url);
    console.log(`QR code for ${url} saved as ${fileName}`);
  } catch (error) {
    console.error(`Error generating QR code for ${url}:`, error);
  }
}

// URL 배열을 순회하며 QR 코드 생성
async function generateQRCodes(urls: string[]): Promise<void> {
  for (let i = 0; i < urls.length; i++) {
    await generateQRCode(urls[i], i);
  }
}

// QR 코드 생성 실행
generateQRCodes(urls)
  .then(() => console.log('All QR codes generated successfully.'))
  .catch(error => console.error('Error generating QR codes:', error));
