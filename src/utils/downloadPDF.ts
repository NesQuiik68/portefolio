/**
 * Fonction utilitaire pour télécharger un fichier PDF
 * @param fileUrl - URL du fichier à télécharger
 * @param fileName - Nom du fichier lors du téléchargement
 */
const downloadPDF = (fileUrl: string, fileName: string): void => {
  // Créer un élément 'a' temporaire
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.target = '_blank';
  
  // Ajouter au DOM, déclencher le clic, puis supprimer
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadPDF; 