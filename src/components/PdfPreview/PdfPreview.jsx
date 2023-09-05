import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import styles from './PdfPreview.module.css';
import PolicyFile from '../../pdf/Policy.pdf';
import CookieFile from '../../pdf/Cookie.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const PrivacyPolicyPreview = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await fetch('http://80.87.107.15/api/v1/cookies/');
        if (response.ok) {
          const cookies = await response.json();
          console.log('Полученные cookies:', cookies);
          // Дальнейшая обработка полученных cookies
        } else {
          console.error('Ошибка при получении cookies:', response.status);
          // Обработка ошибки получения cookies
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        // Обработка ошибки выполнения запроса
      }
    };

    fetchCookies();
  }, []);

  const zoomFactor = 0.9;

  function getCurrentPDF() {
    switch (location.pathname) {
      case '/privacy':
        return {
          file: PolicyFile,
          downloadText: 'Скачать в формате PDF',
        };
      case '/cookies':
        return {
          file: CookieFile,
          downloadText: 'Скачать в формате PDF',
        };
      default:
        return null;
    }
  }

  const currentPDF = getCurrentPDF();

  return (
    <div className={styles.policy}>
      {currentPDF && (
        <>
          <Document
            file={currentPDF.file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <div className={styles.pdf}>
              <Page pageNumber={pageNumber} scale={zoomFactor} />
              {numPages > 1 && (
                <Page pageNumber={pageNumber + 1} scale={zoomFactor} />
              )}
            </div>
          </Document>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => setPageNumber(pageNumber - 2)}
              disabled={pageNumber <= 1}
            >
              Предыдущая страница
            </button>
            <p className={styles.pages}>
              Страница {pageNumber + 1} из {numPages}
            </p>
            <button
              className={styles.button}
              onClick={() => setPageNumber(pageNumber + 2)}
              disabled={pageNumber >= numPages - 1}
            >
              Следующая страница
            </button>
          </div>
          <a href={currentPDF.file} download className={styles.download}>
            {currentPDF.downloadText}
          </a>
        </>
      )}
    </div>
  );
};

export default PrivacyPolicyPreview;
