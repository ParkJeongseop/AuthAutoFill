.class Lf/e;
.super Lf/d;
.source "SourceFile"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lf/e$a;
    }
.end annotation


# direct methods
.method constructor <init>(Landroid/content/Context;Lm/b;)V
    .locals 0

    invoke-direct {p0, p1, p2}, Lf/d;-><init>(Landroid/content/Context;Lm/b;)V

    return-void
.end method


# virtual methods
.method h(Landroid/view/ActionProvider;)Lf/d$a;
    .locals 2

    new-instance v0, Lf/e$a;

    iget-object v1, p0, Lf/b;->b:Landroid/content/Context;

    invoke-direct {v0, p0, v1, p1}, Lf/e$a;-><init>(Lf/e;Landroid/content/Context;Landroid/view/ActionProvider;)V

    return-object v0
.end method
