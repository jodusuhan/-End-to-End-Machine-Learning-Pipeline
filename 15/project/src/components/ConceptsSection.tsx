import { HelpCircle } from 'lucide-react';

function ConceptsSection() {
  const concepts = [
    {
      question: 'What is an ML pipeline?',
      answer:
        'A Machine Learning pipeline is a sequence of automated steps that processes data from raw input to final predictions. It combines data preprocessing, feature engineering, model training, and prediction into one streamlined workflow.',
    },
    {
      question: 'Why do pipelines reduce data leakage?',
      answer:
        'Pipelines prevent data leakage by ensuring that preprocessing steps (like scaling) are fit only on training data and then applied to test data. This maintains the separation between train and test sets, avoiding information leak from test data during training.',
    },
    {
      question: 'What is ColumnTransformer?',
      answer:
        'ColumnTransformer is a scikit-learn tool that applies different preprocessing steps to different columns. For example, it can scale numerical features while encoding categorical features, all in a single transformer.',
    },
    {
      question: 'Why do pipelines help deployment?',
      answer:
        'Pipelines package all preprocessing and model steps into a single object that can be saved and loaded. This ensures that new data in production gets the exact same preprocessing as training data, making deployment more reliable and reproducible.',
    },
    {
      question: 'Pipeline vs manual preprocessing?',
      answer:
        'Manual preprocessing requires separate steps for training and testing, increasing the risk of errors and data leakage. Pipelines automate this process, ensure consistency, reduce code duplication, and make the workflow more maintainable.',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">Key Concepts</h3>
      </div>

      <div className="space-y-6">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {concept.question}
            </h4>
            <p className="text-gray-700 leading-relaxed">{concept.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Evaluation Metrics
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-gray-900">Accuracy</p>
            <p className="text-sm text-gray-700">
              Percentage of correct predictions out of total predictions
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Precision</p>
            <p className="text-sm text-gray-700">
              Of all positive predictions, how many were actually positive
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Recall</p>
            <p className="text-sm text-gray-700">
              Of all actual positives, how many were correctly predicted
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900">F1-Score</p>
            <p className="text-sm text-gray-700">
              Harmonic mean of precision and recall, balancing both metrics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptsSection;
