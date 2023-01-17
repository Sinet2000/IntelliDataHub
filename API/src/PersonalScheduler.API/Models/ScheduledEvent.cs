namespace PersonalScheduler.API.Models;

public class ScheduledEvent
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public DateTime Start { get; set; }

    public DateTime End { get; set; }
    
    public string Notes { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
}