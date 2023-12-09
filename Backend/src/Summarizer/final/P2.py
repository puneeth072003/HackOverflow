from transformers import BartTokenizer, BartForConditionalGeneration
import sys 

# Load BART tokenizer and model
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')
model = BartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')

# Function to summarize a chunk of conversation 
def summarize_chunk(chunk):
    inputs = tokenizer.encode("Summarize: " + chunk, return_tensors="pt", max_length=1024, truncation=True)
    summary_ids = model.generate(inputs, max_length=100, min_length=30, length_penalty=2.0, num_beams=4, early_stopping=True)  
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

# Split conversation into chunks   
max_chunk_length = 1000  # Define the maximum length for each chunk
chunks = []
current_chunk = ""  # Initialize the current chunk variable

with open("C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\transcribed_text.txt", 'r', encoding='utf-8') as file:
    text = file.read()
    for char in text:
        if len(current_chunk) < max_chunk_length:
            current_chunk += char
        else:
            chunks.append(current_chunk)
            current_chunk = char

    # Append the last chunk (if any remaining characters)
    if current_chunk:
        chunks.append(current_chunk)

# Summarize each chunk    
chunk_summaries = [summarize_chunk(chunk) for chunk in chunks]

# Join chunk summaries and get final summary  
final_summary = ' '.join(chunk_summaries)
print(final_summary)
sys.stdout.flush() 
