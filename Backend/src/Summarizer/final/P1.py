from transformers import pipeline
from soundfile import SoundFile
from pydub import AudioSegment
import sys

# Define the audio and output file paths
audio_file_path = "C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\ExtractedAudio.wav"
output_file_path = "C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\transcribed_text.txt"

# Initialize the Whisper model
whisper = pipeline("automatic-speech-recognition", model="openai/whisper-base", device=-1)

# Read the audio
audio = AudioSegment.from_file(audio_file_path)
audio_length = AudioSegment.from_file(audio_file_path).duration_seconds 

chunk_length=30000
n_chunks = int(audio_length / chunk_length)

# Initialize empty string for combined text
transcribed_text = ""

# Read audio in chunks
while audio:
    chunk = audio[:chunk_length]

    chunk.export("chunk.wav", format="wav")

      # Transcribe chunk    
    text = whisper("chunk.wav")
    # print("##############",text)
    transcribed_text += text['text']  # Use result[0]["text"] to access the text
    audio = audio[chunk_length:]

# Save the transcribed text to a file
with open(output_file_path, "w", encoding="utf-8") as file:
    file.write(transcribed_text)

print(output_file_path)
sys.stdout.flush()