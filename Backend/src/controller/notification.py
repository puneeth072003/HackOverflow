import smtplib
from email.mime.text import MIMEText
import sys

def send_notification(emails):
    subject = 'Test Subject'
    message = 'This is a test message without GUI.'
    try:
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        smtp_username = 'huddle773@gmail.com'
        smtp_password = 'bbcl flcg duof bciu'
        sender_email = 'huddle773@gmail.com'

        # Create a connection to the SMTP server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)

        for email in emails:
            # Create the email message
            msg = MIMEText(message)
            msg['Subject'] = subject
            msg['From'] = sender_email
            msg['To'] = email

            # Send the email
            server.sendmail(sender_email, [email], msg.as_string())

        # Quit the server
        server.quit()

        print("Emails sent successfully!")
    except Exception as e:
        print(f"An error occurred: {str(e)}")



if __name__ == "__main__":
    arguments = sys.argv[1:]
    send_notification(arguments)
