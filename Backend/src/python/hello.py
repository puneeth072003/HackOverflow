import re

arr=[]
def extract_note_sentences(input_text):
    note_pattern = re.compile(r'\bNote that\b\s*(.*?\.)(?=\s|$)', re.IGNORECASE | re.DOTALL)
    
    matches = re.findall(note_pattern, input_text)
    
    for match in matches:
        arr.append(match.strip())

input_text = """
Note that The app is a collaboration with Sunbird, which provides iMessage to Android bridging services in beta. Note that Users have to give access to their iCloud credential two, nothing or sunbird. Note that Apple announced on Friday that the company will be releasing a new version of its iOS software. The software will allow users to access a ecrypted database and delete it if it is not used in two weeks. Note that RCS message or rich communication messaging standard, whatever it is. Encryption is not supported group chats suck.Note that Just about everything about SMS kind of sucks and MMS isn't much better. Apple's main motivation for keeping iMessage is to keep you locked into the ecosystem. The color of a bubble has never mattered to me. The idea of being reliant on my default SMS app for something like a group message is just, again, it's utterly bewildering.
"""
extract_note_sentences(input_text)
print(arr)