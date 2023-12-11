import smtplib
from email.mime.text import MIMEText
import sys

def send_notification(arguments):
    meetName=arguments[0]
    email=arguments[1]
    date=arguments[2]
    time=arguments[3]
    subject = f'New Meeting Scheduled - {meetName}'
    message = f'''

Hi there,

I hope this email finds you well. We are pleased to inform you that a new meeting has been scheduled, and you are invited to attend. Details of the meeting are provided below:

Meeting{meetName}
Date: {date}
Time: {time}

We look forward to your valuable participation in the meeting. If you have any questions or require additional information, please feel free to reach out.

Thank you, and we appreciate your commitment to Huddle.

Best regards,
Huddle
'''
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
