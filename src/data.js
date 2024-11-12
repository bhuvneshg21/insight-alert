// Data for the Insight Alert box
export const insightAlertBoxData = {
  usageData: [
    "50% increase in feature usage over last month",
    "Most popular feature: Hiring Plans",
  ],
  didYouKnow: [
    "Did you know you can integrate with CRM?",
    "Track hiring signals in real-time",
  ],
  unexploredFeatures: [
    "Explore AI-driven email outreach",
    "Unlock custom workflow automation",
  ],
  contacts: {
    accountManager: "Spandana Chandra",
    customerSuccessManager: "Jayakrishna Thirumeni",
  },
};
// data.js
export const needHelpData = [
  { name: 'Alice Johnson', email: 'alice@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
  { name: 'Charlie Brown', email: 'charlie@example.com' },
];

// data.js
export const customersData = [
  {
    id: 1,
    name: "Eli Lilly",
    sections: {
      accountFitScore: {
        chartData: {
          labels: ["Low Fit", "Moderate Fit", "Great Fit"],
          datasets: [
            {
              label: "Account Fit Score",
              data: [5, 20, 40],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        tableData: [
          { fitLevel: "Great Fit", targetAccounts: 40, whitespace: 25 },
          { fitLevel: "Moderate Fit", targetAccounts: 25, whitespace: 16 },
          { fitLevel: "Low Fit", targetAccounts: 10, whitespace: 5 },
        ],
        description: "These scores indicate the alignment of accounts with your ICP.",
      },
      contactDataAccuracy: {
        chartData: {
          labels: ["Aaron", "Chris", "Kenith", "Clara"],
          datasets: [
            {
              label: "Contacts Exported",
              data: [10, 8, 14, 10],
              backgroundColor: "#36A2EB",
            },
            {
              label: "Outdated Contacts",
              data: [4, 6, 4, 3],
              backgroundColor: "#FF6384",
            },
          ],
        },
        tableData: [
          { name: "Aaron", exported: 10, outdated: 4 },
          { name: "Chris", exported: 8, outdated: 6 },
          { name: "Kenith", exported: 14, outdated: 4 },
          { name: "Clara", exported: 10, outdated: 3 },
        ],
        description: "This data represents the accuracy of exported contacts.",
      },
      engagementFunnel: {
        chartData: {
          labels: ["Signals", "Viewed", "Actioned"],
          datasets: [
            {
              label: "Engagement Funnel",
              data: [30, 20, 15],
              backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
            },
          ],
        },
        tableData: [
          { step: "Signals", count: 30 },
          { step: "Viewed", count: 20 },
          { step: "Actioned", count: 15 },
        ],
        description: "This funnel tracks engagement across signals.",
      },
      recommendedPlays: {
        chartData: {
          labels: ["Research", "Find Group", "Funding", "Hiring Plans", "AI Email"],
          datasets: [
            {
              label: "Recommended Plays",
              data: [21, 20, 14, 12, 8],
              backgroundColor: "#36A2EB",
            },
          ],
        },
        tableData: [
          { play: "Research", targetAccounts: 21 },
          { play: "Find Group", targetAccounts: 20 },
          { play: "Funding", targetAccounts: 14 },
          { play: "Hiring Plans", targetAccounts: 12 },
          { play: "AI Email", targetAccounts: 8 },
        ],
        description: "Suggested plays based on customer needs and interests.",
      },
    },
  },
  {
    id: 2,
    name: "Bubble",
    sections: {
      accountFitScore: {
        chartData: {
          labels: ["Low Fit", "Moderate Fit", "Great Fit"],
          datasets: [
            {
              label: "Account Fit Score",
              data: [8, 15, 30],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        tableData: [
          { fitLevel: "Great Fit", targetAccounts: 30, whitespace: 18 },
          { fitLevel: "Moderate Fit", targetAccounts: 15, whitespace: 10 },
          { fitLevel: "Low Fit", targetAccounts: 8, whitespace: 4 },
        ],
        description: "Bubble's accounts alignment with ICP.",
      },
      contactDataAccuracy: {
        chartData: {
          labels: ["Sandy", "Peter", "John", "Doe"],
          datasets: [
            {
              label: "Contacts Exported",
              data: [12, 7, 9, 11],
              backgroundColor: "#36A2EB",
            },
            {
              label: "Outdated Contacts",
              data: [3, 4, 2, 5],
              backgroundColor: "#FF6384",
            },
          ],
        },
        tableData: [
          { name: "Sandy", exported: 12, outdated: 3 },
          { name: "Peter", exported: 7, outdated: 4 },
          { name: "John", exported: 9, outdated: 2 },
          { name: "Doe", exported: 11, outdated: 5 },
        ],
        description: "Accuracy of Bubble's contact data.",
      },
      engagementFunnel: {
        chartData: {
          labels: ["Signals", "Viewed", "Actioned"],
          datasets: [
            {
              label: "Engagement Funnel",
              data: [25, 18, 12],
              backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
            },
          ],
        },
        tableData: [
          { step: "Signals", count: 25 },
          { step: "Viewed", count: 18 },
          { step: "Actioned", count: 12 },
        ],
        description: "Bubble's engagement funnel data.",
      },
      recommendedPlays: {
        chartData: {
          labels: ["Research", "Funding", "AI Email", "Follow-up"],
          datasets: [
            {
              label: "Recommended Plays",
              data: [18, 15, 10, 8],
              backgroundColor: "#36A2EB",
            },
          ],
        },
        tableData: [
          { play: "Research", targetAccounts: 18 },
          { play: "Funding", targetAccounts: 15 },
          { play: "AI Email", targetAccounts: 10 },
          { play: "Follow-up", targetAccounts: 8 },
        ],
        description: "Plays recommended for Bubble's strategy.",
      },
    },
  },
  {
    id: 3,
    name: "Cashgrail Pvt",
    sections: {
      accountFitScore: {
        chartData: {
          labels: ["Low Fit", "Moderate Fit", "Great Fit"],
          datasets: [
            {
              label: "Account Fit Score",
              data: [6, 14, 25],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        tableData: [
          { fitLevel: "Great Fit", targetAccounts: 25, whitespace: 15 },
          { fitLevel: "Moderate Fit", targetAccounts: 14, whitespace: 9 },
          { fitLevel: "Low Fit", targetAccounts: 6, whitespace: 2 },
        ],
        description: "Cashgrail's account fit scores.",
      },
      contactDataAccuracy: {
        chartData: {
          labels: ["Alice", "Bob", "Charlie", "David"],
          datasets: [
            {
              label: "Contacts Exported",
              data: [11, 8, 10, 12],
              backgroundColor: "#36A2EB",
            },
            {
              label: "Outdated Contacts",
              data: [3, 5, 4, 6],
              backgroundColor: "#FF6384",
            },
          ],
        },
        tableData: [
          { name: "Alice", exported: 11, outdated: 3 },
          { name: "Bob", exported: 8, outdated: 5 },
          { name: "Charlie", exported: 10, outdated: 4 },
          { name: "David", exported: 12, outdated: 6 },
        ],
        description: "Accuracy of Cashgrail's contacts.",
      },
      engagementFunnel: {
        chartData: {
          labels: ["Signals", "Viewed", "Actioned"],
          datasets: [
            {
              label: "Engagement Funnel",
              data: [22, 17, 14],
              backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
            },
          ],
        },
        tableData: [
          { step: "Signals", count: 22 },
          { step: "Viewed", count: 17 },
          { step: "Actioned", count: 14 },
        ],
        description: "Cashgrail's engagement data.",
      },
      recommendedPlays: {
        chartData: {
          labels: ["Networking", "Partnership", "Investment"],
          datasets: [
            {
              label: "Recommended Plays",
              data: [20, 15, 10],
              backgroundColor: "#36A2EB",
            },
          ],
        },
        tableData: [
          { play: "Networking", targetAccounts: 20 },
          { play: "Partnership", targetAccounts: 15 },
          { play: "Investment", targetAccounts: 10 },
        ],
        description: "Plays suggested for Cashgrail.",
      },
    },
  },
  {
    id: 4,
    name: "TechNova",
    sections: {
      accountFitScore: {
        chartData: {
          labels: ["Low Fit", "Moderate Fit", "Great Fit"],
          datasets: [
            {
              label: "Account Fit Score",
              data: [7, 13, 29],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        tableData: [
          { fitLevel: "Great Fit", targetAccounts: 29, whitespace: 19 },
          { fitLevel: "Moderate Fit", targetAccounts: 13, whitespace: 8 },
          { fitLevel: "Low Fit", targetAccounts: 7, whitespace: 3 },
        ],
        description: "TechNova's account alignment with ICP.",
      },
      contactDataAccuracy: {
        chartData: {
          labels: ["Nick", "Olivia", "Mia", "Liam"],
          datasets: [
            {
              label: "Contacts Exported",
              data: [13, 10, 9, 11],
              backgroundColor: "#36A2EB",
            },
            {
              label: "Outdated Contacts",
              data: [2, 3, 5, 4],
              backgroundColor: "#FF6384",
            },
          ],
        },
        tableData: [
          { name: "Nick", exported: 13, outdated: 2 },
          { name: "Olivia", exported: 10, outdated: 3 },
          { name: "Mia", exported: 9, outdated: 5 },
          { name: "Liam", exported: 11, outdated: 4 },
        ],
        description: "Contact accuracy for TechNova.",
      },
      engagementFunnel: {
        chartData: {
          labels: ["Signals", "Viewed", "Actioned"],
          datasets: [
            {
              label: "Engagement Funnel",
              data: [28, 23, 19],
              backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
            },
          ],
        },
        tableData: [
          { step: "Signals", count: 28 },
          { step: "Viewed", count: 23 },
          { step: "Actioned", count: 19 },
        ],
        description: "TechNova's engagement levels.",
      },
      recommendedPlays: {
        chartData: {
          labels: ["Outreach", "Lead Nurturing", "Market Research"],
          datasets: [
            {
              label: "Recommended Plays",
              data: [19, 18, 15],
              backgroundColor: "#36A2EB",
            },
          ],
        },
        tableData: [
          { play: "Outreach", targetAccounts: 19 },
          { play: "Lead Nurturing", targetAccounts: 18 },
          { play: "Market Research", targetAccounts: 15 },
        ],
        description: "Recommended plays for TechNova.",
      },
    },
  },
];


  // data.js
export const insightAlertsData = [
  {
    customer_id: "123",
    customer_name: "Eli Lilly",
    account_fit_score: "Great Fit",
    usage_summary: {
      features_used: ["Hiring Plans", "Partnership"],
      unused_features: ["Funding", "AI Email"],
    },
    engagement_metrics: {
      signals_actioned: 18,
      signals_viewed: 14,
      signals_total: 30,
    },
    contact_data_accuracy: {
      Aaron: { contacts_exported: 10, outdated_contacts: 4, total_contacts: 12 },
      Chris: { contacts_exported: 8, outdated_contacts: 6, total_contacts: 10 },
      Kenith: { contacts_exported: 14, outdated_contacts: 4, total_contacts: 18 },
      Clara: { contacts_exported: 10, outdated_contacts: 3, total_contacts: 13 },
    },
    recommendations: [
      { type: "Send AI Email", target: "Decision-makers" },
      { type: "Find Buying Group", target: "Engineering" },
    ],
  },
];


  