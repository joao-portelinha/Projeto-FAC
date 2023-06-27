# import packages
# below packages are built-in - no need to install anything new!
# yupi :)
import smtplib
from email.message import EmailMessage

# set your email and password
# please use App Password
email_address = "portelinhapt@gmail.com"
email_password = "hkovungrykrmtmwq"

# create email
msg = EmailMessage()
msg['Subject'] = "teste 2"
msg['From'] = email_address
msg['To'] = "fabio.mt.goncalves@gmail.com"
msg.set_content("Ficheiro em anexo")

# send email
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(email_address, email_password)
    smtp.send_message(msg)