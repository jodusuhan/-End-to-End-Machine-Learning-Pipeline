import { useState } from 'react';
import { BookOpen, Code, CheckCircle, Activity } from 'lucide-react';
import Header from './components/Header';
import StepCard from './components/StepCard';
import CodeExample from './components/CodeExample';
import ConceptsSection from './components/ConceptsSection';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Load Dataset',
      description: 'Load the Breast Cancer dataset and separate features from target variable',
      icon: BookOpen,
      code: `from sklearn.datasets import load_breast_cancer
import pandas as pd
import numpy as np

# Load the dataset
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = pd.Series(data.target, name='target')

print(f"Dataset shape: {X.shape}")
print(f"Features: {X.columns.tolist()[:5]}...")
print(f"Target classes: {np.unique(y)}")`
    },
    {
      id: 1,
      title: 'Identify Features',
      description: 'Identify numerical and categorical features for preprocessing',
      icon: Activity,
      code: `# All features in breast cancer dataset are numerical
numerical_features = X.columns.tolist()
categorical_features = []

print(f"Numerical features: {len(numerical_features)}")
print(f"Categorical features: {len(categorical_features)}")`
    },
    {
      id: 2,
      title: 'Create Pipeline',
      description: 'Build preprocessing pipeline using ColumnTransformer',
      icon: Code,
      code: `from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression

# Preprocessing for numerical data
numerical_transformer = StandardScaler()

# Bundle preprocessing
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_features)
    ])

# Create the complete pipeline
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression(max_iter=10000))
])

print("Pipeline created successfully!")`
    },
    {
      id: 3,
      title: 'Train & Evaluate',
      description: 'Split data, train the pipeline, and evaluate performance',
      icon: CheckCircle,
      code: `from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import joblib

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train the pipeline
pipeline.fit(X_train, y_train)

# Make predictions
y_pred = pipeline.predict(X_test)

# Calculate metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print(f"Accuracy: {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1-Score: {f1:.4f}")

# Save the pipeline
joblib.dump(pipeline, 'ml_pipeline_model.pkl')
print("Model saved as 'ml_pipeline_model.pkl'")`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            End-to-End Machine Learning Pipeline
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to build a complete ML pipeline using the Breast Cancer dataset.
            Follow each step to understand the workflow used in production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pipeline Steps</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <CodeExample code={steps[activeStep].code} />
          </div>
        </div>

        <ConceptsSection />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            Task 15: Machine Learning Pipeline Implementation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
