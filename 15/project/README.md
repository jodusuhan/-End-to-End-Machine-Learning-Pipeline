# ML Pipeline Learning Platform

An interactive web application designed to help students learn about End-to-End Machine Learning Pipelines using the Breast Cancer dataset.

## Overview

This project is an educational tool for Task 15 of the Machine Learning internship program. It provides a step-by-step guide to building a complete ML pipeline using scikit-learn.

## Features

- **Interactive Step-by-Step Guide**: Learn each phase of the ML pipeline workflow
- **Code Examples**: Copy-paste ready Python code for each step
- **Key Concepts**: Understand important ML pipeline concepts through Q&A format
- **Evaluation Metrics**: Learn about accuracy, precision, recall, and F1-score
- **Clean UI**: Modern, student-friendly interface built with React and Tailwind CSS

## What You'll Learn

1. **Load Dataset**: How to load the Breast Cancer dataset from sklearn
2. **Identify Features**: Differentiate between numerical and categorical features
3. **Create Pipeline**: Build a preprocessing pipeline using ColumnTransformer
4. **Train & Evaluate**: Split data, train the model, and evaluate performance

## Pipeline Steps Covered

### Step 1: Load Dataset
- Load the Breast Cancer dataset from sklearn
- Separate features (X) from target variable (y)
- Understand the dataset structure

### Step 2: Identify Features
- Identify numerical features
- Identify categorical features
- Prepare for preprocessing

### Step 3: Create Pipeline
- Use StandardScaler for numerical features
- Build ColumnTransformer for preprocessing
- Create a complete Pipeline with model

### Step 4: Train & Evaluate
- Split data into train and test sets
- Train the pipeline
- Generate predictions
- Calculate evaluation metrics
- Save the trained model

## Key Concepts Explained

- **ML Pipeline**: Automated workflow from raw data to predictions
- **Data Leakage Prevention**: How pipelines maintain train-test separation
- **ColumnTransformer**: Apply different preprocessing to different columns
- **Deployment Benefits**: Why pipelines make production deployment easier
- **Pipeline vs Manual**: Advantages of automated preprocessing

## Evaluation Metrics

The platform explains four key metrics:
- **Accuracy**: Overall correctness of predictions
- **Precision**: Accuracy of positive predictions
- **Recall**: Coverage of actual positive cases
- **F1-Score**: Balance between precision and recall

## Technology Stack

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icon library

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## How to Use This Platform

1. **Navigate Through Steps**: Click on each step card to view the corresponding code
2. **Copy Code**: Use the copy button to copy code examples
3. **Read Concepts**: Scroll down to understand key ML pipeline concepts
4. **Learn Metrics**: Review the evaluation metrics section

## Implementation Guide

To implement the actual ML pipeline:

1. Open Jupyter Notebook or Google Colab
2. Copy the code from each step in order
3. Run each cell sequentially
4. Observe the outputs and metrics
5. Save your trained pipeline as `ml_pipeline_model.pkl`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Application header
│   ├── StepCard.tsx         # Step cards for navigation
│   ├── CodeExample.tsx      # Code display with copy functionality
│   └── ConceptsSection.tsx  # Key concepts and metrics
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## Dataset Information

**Primary Dataset**: Breast Cancer Dataset (sklearn)
- Built into scikit-learn
- Binary classification problem
- 30 numerical features
- 569 samples
- Target: Malignant (1) or Benign (0)

**Alternative**: Titanic Dataset (if needed)

## Learning Outcomes

After using this platform, students will understand:
- How to build production-ready ML pipelines
- The importance of proper data preprocessing
- How to prevent data leakage
- How to evaluate model performance
- How to save and deploy ML models

## Task Deliverables

When completing Task 15, ensure you have:
1. Jupyter notebook with complete ML pipeline implementation
2. Evaluation metrics (accuracy, precision, recall, F1-score)
3. Saved pipeline model file (ml_pipeline_model.pkl)

## Interview Preparation

The platform covers these common interview questions:
- What is an ML pipeline?
- Why do pipelines reduce data leakage?
- What is ColumnTransformer?
- Why do pipelines help deployment?
- Pipeline vs manual preprocessing?

## Contributing

This is an educational project. Feel free to fork and customize for your learning needs.

## License

This project is created for educational purposes as part of the Machine Learning internship program.

## Support

For questions or issues related to the task, refer to the internship guidelines or reach out to your mentors.
