{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function goBack() \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("main-payment-options").style.display = "block";
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("upi-options").style.display = "none";
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("scan-to-pay-section").style.display = "none";
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("card-payment-section").style.display = "none";
\f1 \strokec2 \

\f0 \strokec2 \}
\f1 \strokec2 \
\

\f0 \strokec2 function showUPIPayment() \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("main-payment-options").style.display = "none";
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("upi-options").style.display = "block";
\f1 \strokec2 \

\f0 \strokec2 \}
\f1 \strokec2 \
\

\f0 \strokec2 function redirectToUPI(app) \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0alert(`Redirecting to $\{app\}...`);
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0// Logic to redirect to UPI app
\f1 \strokec2 \

\f0 \strokec2 \}
\f1 \strokec2 \
\

\f0 \strokec2 function submitUPIID() \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0const upiId = document.getElementById("upi-id").value;
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0if (!upiId || !upiId.includes("@")) \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0alert("Please enter a valid UPI ID.");
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\} else \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0alert(`Processing payment for UPI ID: $\{upiId\}`);
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0// Logic to process payment
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\}
\f1 \strokec2 \

\f0 \strokec2 \}
\f1 \strokec2 \
\

\f0 \strokec2 function showScanToPay() \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("main-payment-options").style.display = "none";
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("scan-to-pay-section").style.display = "block";
\f1 \strokec2 \
\

\f0 \strokec2 \'a0\'a0\'a0\'a0const qrContainer = document.getElementById("qr-code-container");
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0qrContainer.innerHTML = ""; // Clear existing QR code
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0new QRCode(qrContainer, \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0text: "upi://pay?pa=thefabr@ybl&pn=TheFarb&cu=INR",
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0width: 200,
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0height: 200,
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0\});
\f1 \strokec2 \

\f0 \strokec2 \}
\f1 \strokec2 \
\

\f0 \strokec2 function showCardPayment() \{
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("main-payment-options").style.display = "none";
\f1 \strokec2 \

\f0 \strokec2 \'a0\'a0\'a0\'a0document.getElementById("card-payment-section").style.display = "block";
\f1 \strokec2 \

\f0 \strokec2 \}
\f1 \strokec2 \
\
}